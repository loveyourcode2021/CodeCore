import React from "react";
import { NavLink } from 'react-router-dom';
import {Session} from '../../requests'
import bitcoin from "../../Images/bitcoin.png"

export default function NavBar(props){
    const { currentUser, onSignOut } = props;
    const onClickSignOut = (event) => {
      console.log("NAV BAR", currentUser.full_name)
      Session.destroy().then(() => {
      onSignOut(); 
      })
  }

  return (
    <div className="NavBar">
      <figure className="menu-bitcoin" >
      <img className="bitcoin" src={bitcoin} alt="biddr bitcoin" />
      </figure>
      <NavLink to="/" className="menu-item"> Home </NavLink>
      <NavLink to="/auctions" className="menu-item"> Auctions</NavLink>
      <NavLink to="/auctions/new" className="menu-item">New Auction</NavLink>

      {!!currentUser ? (
        <>
          <p className="menu-item"> {currentUser.full_name}</p>
          <a href="/sign_out" onClick={onClickSignOut} className="menu-item">Sign Out</a>
        </>
      ) : (
          <>
            <NavLink to="/sign_in" className="menu-item"> Sign In </NavLink>
            <NavLink to='/sign_up' className="menu-item">Sign Up</NavLink>
          </>
        )}
    </div>
  )
}