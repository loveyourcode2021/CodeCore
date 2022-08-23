import React from 'react';
import { User } from '../../requests';
const SignUpPage = (props) => {
    const { onSignUp } = props;
    const handleSubmit = event => {
        const { currentTarget } = event
        event.preventDefault()
        const formData = new FormData(currentTarget)
        const params = { user: {
            first_name: formData.get('first_name'),
            last_name: formData.get('last_name'),
            email: formData.get('email'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        }
        User.create(params).then(user => {
            if(user?.id){
                onSignUp() // store the user in the App state
                props.history.push('/') //navigate to index
            }
        })
    }
    // <div className="form">
    // <label htmlFor="email" className="form-label">Email</label>
    // <input type="email" name="email" id="email" placeholder="enter email" className="form-field" onChange={event => {
    return(
        <main>
            <h1 className='form-label'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div className="formSingUp">
                <div>
                    <label htmlFor="first_name" className="form-label-s">First name</label>
                    <input type="text" name="first_name" id="first_name" className="form-field-s"/>
                </div>
                <div>
                    <label htmlFor="last_name" className="form-label-s">Last name</label>
                    <input type="text" name="last_name" id="last_name" className="form-field-s"/>
                </div>
                <div>
                    <label htmlFor="email" className="form-label-s">Email</label>
                    <input type="text" name="email" id="email" className="form-field-s"/>
                </div>
                <div>
                    <label htmlFor="password" className="form-label-s">Password</label>
                    <input type="password" name="password" id="password" className="form-field-s"/>
                </div>
                <div>
                    <label htmlFor="password_confirmation" className="form-label-s">Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" className="form-field-s" />
                </div>
                <input type="submit" value="Sign Up" className="form-button-s" />
                </div>
            </form>
        </main>
    )
}

export default SignUpPage;