import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div`
    width: 100%;
    border: 1px solid blue;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export default function Cards() {

    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('https://ecom-mock.mumzworld.tech/products')
        .then(r => {
            setData(r.data.data)
        })
    },[])

  return (
    <Container>
        {data ? data.map(p => <Card key={p.id} {...p}  />) : 'Loading...'}
    </Container>
  )
}
