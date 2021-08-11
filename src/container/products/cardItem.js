import React, {Fragment} from 'react';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Sello from './sellos';

class CardItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            statusbtn: false,
        }
    }


    render() {

        const testfuntion = (status) => {
            if(status){
                this.setState({statusbtn : true})
            }else{
                this.setState({statusbtn : false})
            }
        }

        const convertMoney = (val) => {
            const mon = (Number(val)).toLocaleString('es-CO', {
                currency: 'COL',
                maximumFractionDigits: '0',
              });
            return mon;
        }

        return(
            <Fragment key={this.props.key}>
                <Card className="card-content" 
                    onMouseEnter={()=>testfuntion(true)}
                    onMouseLeave={()=>testfuntion(false)}>
                    <div className="list-card">
                        <div></div>
                        <Card.Img variant="top" src={this.props.thumbnail} />
                        <div className="list-tag">
                            {
                                (this.props.sellos).map((item,index) => {
                                    return (
                                        <Sello 
                                            key={index}
                                            img={item.image}
                                            name={item.name}
                                        />

                                    )
                                })
                            }
                        </div>
                    </div>
                    <Card.Body>
                        <div className="card-sku-content">
                            <div className="titleSuperFuds">SuperFuds</div>
                            <div className="card-sku">{this.props.net_content}</div>
                        </div>
                        <Card.Title>{this.props.title}</Card.Title>
                        <div className="card-content-price">
                            <div className="price-new"><span>$</span>{convertMoney(this.props.price_real)}</div>
                            <div className="price-old">x {this.props.units_sf} unids</div>
                        </div>
                    </Card.Body>
                    <Card.Body className={this.state.statusbtn ? 'card-button-center' : 'card-button-center btn-hidden'}>
                        <Button onClick={()=>this.props.addItemToShoppingCar(this.props ,'ADD')}>Agregar al carrito</Button>
                    </Card.Body> 
                </Card>
            </Fragment>
        )
    }
}

export default CardItem