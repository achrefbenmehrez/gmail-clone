import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import { signin } from '../../actions/users'
import { getMails } from '../../actions/mails'

function Login() {
    const dispatch = useDispatch()

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        
        try {
          dispatch(signin(result))
          dispatch(getMails())
        } catch (error) {
          console.log(error);
        }
      };
    
      const googleError = () => {
        console.log("Google sign in was unsuccessful. Try again later");
      };

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="gmail" />
                <GoogleLogin
                    clientId="487102926565-t3vki5jj4ni7iqprlsjjep1gjfsmmpa1.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={googleSuccess}
                    onFailure={googleError}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <Button onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" color="primary">Login</Button>
                    )}
                />
            </div>
        </div>
    )
}

export default Login
