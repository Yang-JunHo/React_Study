import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Ex06Card = ({ data }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.imgSrc} />
            <Card.Body>
                <Card.Title>{data.title},{data.birthYear}</Card.Title>
                <Card.Text>
                    {data.content}
                </Card.Text>
                <Button variant="primary" href={data.SNS}>instargram</Button>
            </Card.Body>
        </Card>
    )
}

export default Ex06Card