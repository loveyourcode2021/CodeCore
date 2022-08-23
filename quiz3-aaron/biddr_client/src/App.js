
import './App.css';
import React, { useState, useEffect } from 'react';
import { Session, User } from './requests';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import {WelcomePage} from './component/WelcomePage'
import NavBar from './component/partials/NavBar';
import { AuctionIndex } from './component/AuctionIndexPage'
import { AuctionShow } from './component/AuctionShowPage';
import { NewAuctionForm} from './component/partials/NewAuctionForm'
import { SignIn} from './component/partials/SignIn'
import {AuthRoute} from './component/partials/AuthRoute'
import ActionNew from './component/ActionNewPage'
import SignUpPage from './component/partials/SignUp';
export default function App() {
  const [ currentUser, setCurrentUser ] = useState(null)
  const [isLoading, setLoading] = useState(true)
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

    useEffect(() => {
      console.log("useEffect")
      getCurrentUser()
    }, [])

    const onSignOut = () => {
      console.log("Sign OUt CLICKED", currentUser)
        setCurrentUser(null)
       
    }
    return(
      <div>
          <>
         
          <BrowserRouter>
            <NavBar currentUser={currentUser} onSignOut={ onSignOut}/>
            <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/sign_in" render={routeProps =>(
                     <SignIn onSignIn={ getCurrentUser} {...routeProps} />
             )} />
            <Route exact path='/sign_up'
            render={(routeProps) => <SignUpPage  onSignUp={getCurrentUser} {...routeProps}/>}
            ></Route>
            <Route path="/auctions" exact component={AuctionIndex} />
            <AuthRoute isAllowed={!!currentUser} path="/auctions/new" exact component={ActionNew} />
            <Route exact path='/auctions/:id' component={AuctionShow}></Route>
          </Switch>
          </BrowserRouter>
          </>
      
      </div>
    )
}