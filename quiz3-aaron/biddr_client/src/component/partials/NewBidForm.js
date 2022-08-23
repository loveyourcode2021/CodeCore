import React from 'react';
export function CreateBid(props) {
   
    
    const onSubmitBid = (e) => {
        e.preventDefault();
        const { currentTarget } = e;
        const formData = new FormData(currentTarget);
        const newBid = {bid:{
          bid: formData.get("bid")
        }
        };
        props.onCreatedBid(newBid);
        currentTarget.reset();
      }
    return (
        <form onSubmit={onSubmitBid}  >
        <div className="form-bid">
    
          <label htmlFor="bid" className="form-label">Bid:</label>
          <input type="text" name="bid" id="bid" placeholder="Please Enter bid" className="form-field" />
            <button type="submit" className="form-button">Submit Bid</button>
            
        </div>
        </form>
      )
}