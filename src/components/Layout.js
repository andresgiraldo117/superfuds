import React, {Fragment} from 'react';
import { addProducts, showProducts } from '../container/products/actions';

import { AiOutlineMinusCircle } from 'react-icons/ai';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import CardItem from '../container/products/cardItem';
import Header from './header';
import { IoIosArrowBack } from 'react-icons/io';
import Slider from "react-slick";
import { connect } from 'react-redux';

//import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


class Layout extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            code:'',
            shoppingCarView: false,
            listCar:[]
        }
    }

    componentDidMount(){
        this.props.showProducts();
    }


    render(){

        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "40px",
            slidesToShow: 4,
            speed: 500
          };

        const hiddenShoppingCarContent = (status) => {
            status ? this.setState({shoppingCarView: status}) :this.setState({shoppingCarView: status})
            if(status){
                this.setState({listCar : this.props.listShooppinCar})
            }
        }
        const addItemToShoppingCar = (item,action) => {
            if(action === 'ADD'){
                this.props.addProducts(item, 'ADD');
            }else if(action === 'REMOVE'){
                this.props.addProducts(item, 'REMOVE');
            }
        }

        return (
            <Fragment>
                <Header 
                    hiddenShoppingCarContent={hiddenShoppingCarContent}
                />
                <div className="content-cards">
                    {/* <CardItem /> */}
                    <Slider {...settings}>
                        {
                            (this.props.products).map(item => {
                                return (
                                    <div key={item.id}>
                                        <CardItem 
                                            id={item.id}
                                            title={item.title}
                                            thumbnail={item.thumbnail}
                                            sellos={item.sellos}
                                            units_sf={item.units_sf}
                                            price_real={item.price_real}
                                            net_content={item.net_content}
                                            addItemToShoppingCar={addItemToShoppingCar}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                {
                    this.state.shoppingCarView 
                    ?   <div className="content-shoppingcar">
                                <div onClick={()=>hiddenShoppingCarContent(false)} className="content-shoppingcar-back"><IoIosArrowBack color="#25c16a" /> Volver a la tienda</div>
                                <div className="content-shoppingcar-items">
                                    <div className="title">Carrito de compras</div>
                                    <div className="green">
                                        <span>{(this.props.listShooppinCar).length} </span>Items
                                    </div>
                                </div>
                                <div className="content-shoppingcar-table">
                                    <div className="t-header">
                                        <div>Item</div>
                                        <div>Cantidad</div>
                                        <div>Precio</div>
                                        <div></div>
                                    </div>
                                    <div className="t-body">
                                        {
                                            (this.props.listShooppinCar).map((carItem) => {
                                                return(
                                                    <div className="shoppingcar-item" key={carItem.id}>
                                                        <div className="preview">
                                                            <img className="sp-avatar"
                                                                src={carItem.thumbnail}
                                                                alt="avatar"
                                                            />
                                                            <div>
                                                                <div>{carItem.title}</div>
                                                                <div>{carItem.units_sf + ' - ' + carItem.net_content }</div>
                                                                <div className="titleSuperFuds">SuperFuds</div>
                                                            </div>
                                                        </div>
                                                        <div className="updateItems">
                                                            <AiOutlinePlusCircle />
                                                            <div>1</div>
                                                            <AiOutlineMinusCircle />
                                                        </div>
                                                        <div className="price-new">
                                                            <span>$</span>5.651
                                                        </div>
                                                        <div className="trash">
                                                            <BsTrash onClick={() => addItemToShoppingCar(carItem ,'REMOVE')} />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                        </div>
                    : ''
                }
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.showProducts.products,
        listShooppinCar : state.addProducts.listShooppinCar,
        showLoading : state.showProducts.showLoading,
    }
}

export default connect(mapStateToProps, {showProducts,addProducts} )( Layout )
