import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons';
import {useCollection} from 'react-firebase-hooks/firestore'
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Sidebar = () => {

    const [channels, loading, error] = useCollection(db.collection('rooms'));

    const [user] = useAuthState(auth);

    return (
        <StyledSidebarContainer>
            <StyledSidebarHeader>
                <StyledSidebarInfo>
                    <h2>Trabzonspor</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user.displayName}
                    </h3>
                </StyledSidebarInfo>
                <CreateIcon />
            </StyledSidebarHeader>

            <SideBarOption Icon={InsertComment} title="Threads" />
            <SideBarOption Icon={Inbox} title="Mentions & reactions" />
            <SideBarOption Icon={Drafts} title="Saved Items" />
            <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
            <SideBarOption Icon={PeopleAlt} title="People & user groups" />
            <SideBarOption Icon={Apps} title="Apps" />
            <SideBarOption Icon={FileCopy} title="File browser" />
            <SideBarOption Icon={ExpandLess} title="Show less" />
            <hr />
            <SideBarOption Icon={ExpandMore} title="Channels" />
            <hr />
            <SideBarOption Icon={Add} title="Add Channel" addChannelOption />

            {channels?.docs.map(doc => (
                <SideBarOption 
                    key={doc.id} 
                    id={doc.id} 
                    title={doc.data().name} 
                />
            ))} 

        </StyledSidebarContainer>
    )
}

export default Sidebar

const StyledSidebarContainer = styled.div`
    padding-top: 60px;
    color: #fff;
    background: var(--slack-color);
    flex: 0.3;
    > hr {
        margin: 10px 0;
        border: 1px solid #49274b;
    }
`
const StyledSidebarHeader = styled.div`
    display: flex;
    padding: 13px;
    border-bottom: 1px solid #49274b;
    > svg {
        padding: 8px;
        font-size: 18px;
        background-color: #fff;
        color: #49274b;
        border-radius: 50%;
        cursor: pointer;
    }
`

const StyledSidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 15px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
        > svg {
            font-size: 14px;
            color: green;
            margin-right: 5px;
        }
    }
`