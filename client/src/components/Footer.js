import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper>
    <div>Healthy-Meal-blog</div>
    </Wrapper>
  )
}

export default Footer


const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center;
margin-top: 100px;
`