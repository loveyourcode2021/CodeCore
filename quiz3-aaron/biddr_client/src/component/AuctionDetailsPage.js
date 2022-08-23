import React from "react"
import { Link } from "react-router-dom";

 function AuctionDetails(props) {

  const { auction } = props
  console.log(auction)
  return (
    <main className="card-list">
      <div>
        <Link to={`/auctions/${auction.id}`} >
          <h3>   Title:   {auction.title}      </h3>
        </Link>
      
        <p>  Posted on: {new Date(auction.created_at).toDateString()} </p>
      </div>
    </main>
  )
}
export default AuctionDetails

