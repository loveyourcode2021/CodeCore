import React, {useState, useEffect} from "react"
import {Auction, Bid} from "../requests"
import {CreateBid} from "./partials/NewBidForm"


export function AuctionShow(props){
    const [auction, setAuction] = useState(null)
    const [errors, setErrrors] = useState([])
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        Auction.show(props.match.params.id)
        .then(response => {
            setAuction(response)
            setLoading(false)
        })
    },[])
    const createBid = params => {
        Bid.create(params, props.match.params.id).then(response => {
            if(response.errors) setErrrors({message: response.errors})
            props.history.push(`/auctions/${props.match.params.id}`)
            window.location.reload(false)
        })
    }

    return (
        <div className="AuctionShowInfo">
        {isLoading ? (<h3>isLoading</h3>) : 
        (<div className="grid-card">
            <div className="card-body">
                <p>Titile: {auction.title}</p>
                <p>Description: {auction.description}</p>
                <CreateBid errors={errors} onCreatedBid={createBid} className="bid" />
            </div>
            <div>
                <p className="card-text">
                    current bid: see below
                </p>
                <p className="card-text">
                    Ends At: {new Date(auction.ending).toDateString()}
                </p>
                <p className="card-text">
                reserve price with 
                </p>
            </div>

            <div className="bids">
                <h3> Previous Bids</h3>
                {auction.bids.map((bid, index) => (
                <div key={index} className="bid-card">
                    <p> {bid.bid}  on {new Date(bid.created_at).toDateString()} </p>
                </div>
                ))}
            </div>
        </div>)}

        </div>
    )

}