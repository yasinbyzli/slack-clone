import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import styled from 'styled-components'
import { db, auth } from '../firebase';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = ({channelName, channelId, chatRef}) => {

    const [input, setInput] = useState("");
    const [user] = useAuthState(auth)

    const onChange = e => {
        setInput(e.target.value)
    }

    const sendMessage = e => {
        e.preventDefault()

        if (!channelId) {
            return false
        }

        db.collection('rooms').doc(channelId).collection('messages').add({
            messsage : input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            image: user.photoURL
        });

        chatRef.current.scrollIntoView({
            behavior : "smooth"
        })

        setInput("");
    }

    return (
        <StyledChatInputContainer>
            <form onSubmit={sendMessage}>
                <input 
                onChange={e => onChange(e)}
                    value={input}
                    placeholder={`Message #${channelName}`}
                />
                <Button hidden type="submit" >
                    SEND
                </Button>
            </form>
        </StyledChatInputContainer>
    )
}

export default ChatInput

const StyledChatInputContainer = styled.div`
    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border-radius: 3px;
        padding: 20px;
        outline: none;
        border: 1px solid gray;
    }
    > form > button {
        display: none;
    }
`