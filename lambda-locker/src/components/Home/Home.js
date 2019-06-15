import React from 'react'

import styled from 'styled-components'

const HomeContainer = styled.div`
    width: 420px;
    margin: 0 auto;

    p {
        font-size: 1.2rem;
        text-align: left;
    }

    h2 {
        text-align: left;
    }
`

const Home = () => {
    return (
        <HomeContainer>
            <h1>Welcome to <span className="lambdaText">Lambda Locker</span></h1>
            <p><span className="lambdaText">Lambda Locker</span> is your personal space to store notes, links, and resources as you journey through the <span className="lambdaText">Lambda</span>  Curriculum.</p>
            <p>When you create your <span className="lambdaText">Lambda Locker</span>, you'll also have access to the hundreds of resources other <span className="lambdaText">Lambda </span>students have stored and found useful themselves.</p>
            <h2>Interested in learning more?</h2>
            <p>Discover <span className="lambdaText">Lambda Locker</span>.</p>
        </HomeContainer>
    )
}

export default Home