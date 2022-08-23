import React, { useState } from 'react'


export function  NewAuctionForm(props)  {
  const [published, setPublished] = useState("true")
  const [draft, setDraft] = useState("false")
  const [buttonName, setButtonName] = useState("")
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

        const newAuction = {
      title: formData.get("title"),
      description: formData.get("description"),
      reserve: formData.get("reserve"),
      ending: formData.get("ending"),
    };
    newAuction["reserve_met"] = buttonName === "draft" ? draft : published
    console.log(newAuction)
    props.onCreateAuction(newAuction);
    currentTarget.reset();
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <label htmlFor="title" className="form-label"> Title: </label>
        <input type="text" name="title" id="title" placeholder=" Pleace Enter Title"  />
        <label htmlFor="description" className="form-label"> Description: </label>
        <input type="text" name="description" id="description" placeholder=" Pleace Enter description"cod/>
        <label htmlFor="ending" className="form-label"> Ending  date: </label>
        <input type="date" name="ending" id="ending" />
        <label htmlFor="reserve" className="form-label"> Reserve price: </label>
        <input type="number" name="reserve" id="reserve"  />
        <button type="submit" className="form-button" name="draft" id="draft" value="false" onClick={()=>{setButtonName("draft")}}> Draft</button>
        <button type="submit" className="form-button" name="publish" id="publish" value="true" onClick={()=>{setButtonName("publish")}}> publish</button>
      </div>
    </form>
  )
}


 