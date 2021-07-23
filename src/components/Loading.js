import React from 'react'
import styled from 'styled-components'
import Spinner from 'react-spinkit'

const Loading = () => {
    return (
        <StyledAppLoading>
            <StyledAppLoadingContent>
                <img src="https://image.flaticon.com/icons/png/512/2111/2111615.png" alt="slack" />
                <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none"/>
            </StyledAppLoadingContent>
        </StyledAppLoading>
    )
}

export default Loading


const StyledAppLoading = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`

const StyledAppLoadingContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    > img {
        height: 100px;
        margin-bottom: 100px;
    }
`