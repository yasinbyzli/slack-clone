import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

const Login = () => {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => 
            alert(error.message)
        )
    }

    return (
        <StyledLoginContainer>
            <StyledLoginInnerContainer>
                <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt="slack" />
                <Button variant="outlined" onClick={signIn}>
                    Continue with Google
                </Button>
            </StyledLoginInnerContainer>
        </StyledLoginContainer>
    )
}

export default Login

const StyledLoginContainer = styled.div`
    background: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
`

const StyledLoginInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding :100px;
    background: #fff;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    > button {
        background-color: #fff;
        border: 2px solid #4285f4;
        color: #4285f4;
        :hover {
            background: #fff !important;
        }
    }
`
