import React, {useState} from "react"
import { Auction } from "../requests"
import {NewAuctionForm} from './partials/NewAuctionForm'
import { Route, Redirect } from "react-router-dom";
 function ActionNew(props) {
  const [errors, setErrors] = useState(null)
  const createAuction = params => {
    Auction.create(params).then(auction => {
      if (auction.errors) {
        setErrors({ errors: auction.errors });
      }else{
        props.history.push(`/auctions/${auction.id}`);
      }
    });
  };

  return (
     <>
      <main>
      <NewAuctionForm errors={errors} onCreateAuction={(params)=> {createAuction(params)}} />
      </main>
      </>
    )
 
}

export default ActionNew