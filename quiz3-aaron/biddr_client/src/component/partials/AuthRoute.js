import React from "react";
import { Route, Redirect } from "react-router-dom";


export const AuthRoute = props => {

  const {
    isAllowed,
    component: Component,
  } = props;

  if (isAllowed){
      return <Route component={Component} />
  } else {
      return <Redirect to='/sign_in' />
  }
}
 
