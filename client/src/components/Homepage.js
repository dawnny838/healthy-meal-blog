import React from 'react'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <Wrapper>
  <h1>Healthy Meal Blog Homepage</h1>
  <p>The mission of this site is to promote healthy meal and eatern Dao-style sport in everyday life. </p>
  <p>There is a saying in English: " We are what we eat!"</p>

  <p>This is the phase 1 of the site, a testing version</p>

  <p>In phase 2, we will publish the real recipe from experienced chef and add AI function</p>

  <p>So stay tune... the best is yet to come!</p>

  <p>If you have any suggestions, please login and leave a comment.</p>

  </Wrapper>
  )
   
  
}

export default Homepage

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center;
font-size: 18px;
margin-left: 10px;
`