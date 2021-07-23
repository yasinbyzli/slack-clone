import React from 'react'
import styled from 'styled-components'
import { Avatar } from "@material-ui/core"
import AccessTimeIcon from "@material-ui/icons/AccessTime"
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Header = () => {

    const [user] = useAuthState(auth);
    console.log(user)
    return (
        <StyledHeaderContainer>

            <StyledHeaderLeft>
                <StyledHeaderAvatar 
                    onClick={() => auth.signOut()}
                    src={user?.photoURL}
                    alt={user?.photoURL}
                />
                <AccessTimeIcon />
            </StyledHeaderLeft>

            <StyledHeaderSearch>
                <SearchIcon />
                <input placeholder="Search"/>
            </StyledHeaderSearch>

            <StyledHeaderRight>
                <HelpOutlineOutlinedIcon />
            </StyledHeaderRight>
        </StyledHeaderContainer>
    )
}

export default Header

const StyledHeaderContainer = styled.div`
    display: flex;
    padding: 10px 0;
    background: var(--slack-color);
    color: #fff;
    justify-content: space-between;
    position: fixed;
    width: 100%;
`

const StyledHeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    > svg {
        margin-left: auto;
        margin-right: 30px;
    }
`

const StyledHeaderAvatar = styled(Avatar)`
    cursor: pointer;
    transition: .2s opacity;
    :hover{
        opacity: .8;
    }
`

const StyledHeaderSearch = styled.div`
    flex: 0.4;
    border-radius: 6px;
    display: flex;
    align-items: center;
    background: #421f44;
    text-align: center;
    padding: 0 50px;
    border: 1px solid gray;
    > input {
        border: none;
        background: transparent;
        width: 100%;
        height: 90%;
        min-width: 30px;
        text-align: center;
        color: #fff;
        :focus{
            outline: none;
        }
    }
`

const StyledHeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    > svg {
        margin-left: auto;
        margin-right: 20px;
    }
`