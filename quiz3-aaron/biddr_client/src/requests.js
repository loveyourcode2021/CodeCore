const BASE_URL = "http://localhost:3000/api/v1";

export const Session ={
    create(params) {
        return fetch(`${BASE_URL}/session`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(params)
        }).then(res => res.json());
      },
    destroy() {
        return fetch(`${BASE_URL}/session`, {
          method: "DELETE",
          credentials: "include"
        }).then(res => {res.json()});
    },
}
export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json())
  },
  create(params){
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include', //need for cookies to be allowed to be sent cross-origin
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
  }).then(res => res.json());  

  }
}

export const Auction =  {
    index() {
      return fetch(`${BASE_URL}/auctions`, {
        credentials: 'include'
      }).then(res => res.json())
    },
    show(id){
        return fetch(`${BASE_URL}/auctions/${id}`,{
            credentials: 'include'
        }).then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/auctions`, {
          method: "POST",
          credentials: 'include',
          headers: {
            'Content-Type': "application/json"
          },
          body: JSON.stringify(params)
        }).then((res) => res.json());
      },
}

export const Bid = {
    create(params, auction_id){
     
        return fetch(`${BASE_URL}/auctions/${auction_id}/bids`, {
            method: "POST",
            credentials: 'include',
            headers: {
              'Content-Type': "application/json"
            },
            body: JSON.stringify({"bid":params["bid"]})
          }).then((res) => res.json());
    }
}

