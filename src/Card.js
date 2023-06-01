import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 400px;
    width: 300px;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
`;

const Thumbnail = styled.img`
    width: 100%;
`;

const Title = styled.h2`
    padding: 0;
    margin: 0 10px;
    width: 100%;
    font-size: 1em;
    color: grey;
`;

const Price = styled.div`
    margin: 0 10px;
    color: red;
    font-weight: 700;
`;

const Button = styled.div`
    height: 30px;
    width: 30px;
    border-radius: 20px;
    border: 1px solid grey;
`

export default function Card({image, name, price}) {
  return (
    <>
    <Container>
        <Thumbnail src={image} />
        <Title>{name}</Title>
        <Price>AED {price}</Price>
        <Button />
    </Container>
    </>
  )
}
