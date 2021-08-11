import React, {Fragment} from 'react';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class CardItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return(
            <Fragment>
                <Card className="card-content" >
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <div className="card-content-price">
                            <div className="price-new">$xxx</div>
                            <div className="price-old">$xxxx</div>
                        </div>
                    </Card.Body>
                    <Card.Body className="card-button-center">
                        <Button variant="dark">Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </Fragment>
        )
    }
}

export default CardItem