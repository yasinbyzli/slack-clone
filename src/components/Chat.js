import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectRoomId } from '../features/appReducer'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase';
import Message from './Message'


const Chat = () => {

    const chatRef = useRef(null)
    

    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )

    const [roomMessage, loading] = useCollection(
        roomId && 
        db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', "asc")
    )


    useEffect(() => {
        chatRef.current.scrollIntoView({
            behavior: "smooth"
        })
    }, [roomId, loading])

    return (
        <StyledChatContainer>
            <StyledHeader>
                <StyledHeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>      
                    <StarBorderOutlined />        
                </StyledHeaderLeft>
                <StyledHeaderRight>
                    <p>
                        <InfoOutlined />
                        Details
                    </p>
                </StyledHeaderRight>
            </StyledHeader>

            <ChatMessages>
                {roomMessage?.docs.map(doc => {
                    console.log(doc.data())
                    const {messsage, timestamp, user, image } = doc.data()
                    return (
                        <Message 
                            key={doc.id}
                            message={messsage}
                            timestamp={timestamp}
                            user={user}
                            userImage={image}
                        />
                    )
                })}
                <StyledChatBottom ref={chatRef}/>
            </ChatMessages>

            <ChatInput
                chatRef={chatRef}
                channelId = {roomId}
                channelName = {roomDetails?.data().name}
            />

        </StyledChatContainer>
    )
}

export default Chat

const StyledChatContainer = styled.div`
    flex: 0.7;
    overflow-y: scroll;
`

const StyledHeader = styled.div`
    margin: 0 20px;
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
`

const StyledHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4 {
        display: flex;
        align-items: center; 
        text-transform: lowercase;
        margin-bottom: 3px;
    }
    > svg {
        margin-left: 10px;
        font-size: 18px;
    }
`

const StyledHeaderRight = styled.div`
    display: flex;
    align-items: center;
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
    }
    > p > svg {
        margin-right: 5px;
        font-size: 16px;
    }
`
const ChatMessages = styled.div`

`

const StyledChatBottom = styled.div`
    padding-bottom: 130px;
`
