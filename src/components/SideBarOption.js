import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { db } from '../firebase';
import {enterRoom} from '../features/appReducer'

const SideBarOption = ({Icon, title, addChannelOption, id}) => {

    const dispatch = useDispatch();


    const addChannel = () => {
        const channelName = prompt('Please enter the channel name');
        if (channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }

    const selectChannel = () => {
        if (id) {
            dispatch(enterRoom({
                roomId: id
            }))
        }
    }


    return (
        <StyledSidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{padding: "10px"}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ) : ( 
                <SidebarOptionChannel>
                    <span>#</span> {title}
                </SidebarOptionChannel>
            )}
        </StyledSidebarOptionContainer>
    )
}

export default SideBarOption


const StyledSidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 4px;
    cursor: pointer;
    :hover{
        opacity: 0.9;
        background: #340e36;
    }
    > h3 {
        font-weight: 500;
    }

`

const SidebarOptionChannel = styled.h3`
    padding: 13px;
    font-weight: 300;
    > span {
        margin-right: 15px;
    }
`