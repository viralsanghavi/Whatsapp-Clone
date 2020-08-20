import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import db, { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
const Login = () => {
    const [{ user }, dispatch] = useStateValue()
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                dispatch({
                    type: 'SET_USER',
                    user: res
                })
                localStorage.setItem('user', JSON.stringify(res))
            })
            .catch(err => alert(err))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://uploFad.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/597px-WhatsApp.svg.png" alt="" />
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>
                    Sign In with Google
                </Button>

            </div>
        </div>
    )
}

export default Login
