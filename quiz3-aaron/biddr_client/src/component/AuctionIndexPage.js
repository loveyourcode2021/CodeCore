import React, {useState, useEffect} from "react";
import AuctionDetails from "./AuctionDetailsPage";
import { Auction, User } from "../requests";

 
export function AuctionIndex(props) {
    const [auctions, setAuctions] =useState([])
    const [isLoading, setLoading] = useState(true)
    const [ currentUser, setCurrentUser ] = useState(null)

    const getCurrentUser = () =>{
      User.current().then(data => {
        if(typeof data.id !== "number"){
          setCurrentUser(null)
          setLoading(false)
        } else{
          setCurrentUser(data)
          setLoading(false)
        }
      })
    }
  
   
    useEffect(() =>{
        Auction.index().then(auctions =>{
        setAuctions(auctions)
        setLoading(false)
        });
        getCurrentUser()
    },[])

    return (
        <div>
            {isLoading ? (<div>Is Loading</div>):(
            <>
            <h1>Current Auctions:</h1>
          
            {auctions.map((auction, index) =>(
          
                (auction.reserve_met === false && auction.seller.full_name === currentUser.full_name) ?
                    (<div key={index}>
                            <AuctionDetails auction={ auction } />
                    </div>)
                    
                :(auction.reserve_met === true ) ?
                (<div key={index}>
                    <AuctionDetails auction={ auction } />
                </div>): <></>
                
            ))}
           
            
            </>
            )}
        </div>
    )

}
