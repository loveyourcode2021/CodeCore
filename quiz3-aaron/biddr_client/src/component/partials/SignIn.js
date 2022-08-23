import React,{ useState} from "react"
import { Session } from "../../requests";

export function SignIn(props){
    const [errors, setError] = useState({})
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const onSubmitSignIn = (e => {
        e.preventDefault();
 
        const user = {
            email: email,
            password: password
        }
        console.log("SignIn",user)
        Session.create(user).then(data => {
            if(data.status === 400){
                setError({message:"wrong email or password"})
            }else{
                setError([])
            
                props.history.push('/');
                if (typeof props.onSignIn === "function") {
                    props.onSignIn();
                }
            }
        })

    })

    return (
   
        <form onSubmit={onSubmitSignIn}>
        <div className="form">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" name="email" id="email" placeholder="enter email" className="form-field" onChange={event => {
                        setEmail(event.currentTarget.value)}}/>
     

          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" id="password" placeholder="Password" className="form-field" onChange={event => {
                        setPassword(event.currentTarget.value)}}/>
          <input type="submit" value="Sign In" />
        </div>
            {errors.length > 0 ? (
            <div className>
              <div className="header">
                Error in Signing
              </div>
              <p>
                {errors.map(err => err.message).join(", ")}
              </p>
            </div>) : (
              ""
            )}
        </form>
    )
}