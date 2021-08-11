import './styles.css';

import React, { Fragment } from 'react';

import { FaShoppingCart } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchEntry: ''
        }
    }



    render() {
        const handleSubmit = (event) => {
            event.preventDefault();
        };

        const updateSearchInput = (event) => {
            this.setState({ searchEntry: event.target.value });
        }


        return (
            <Fragment>
                <div className="header">
                    <div className="header-logo">
                        <img
                            src='https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/superfuds.logo_white.svg'
                            alt="Logo"
                        />
                    </div>
                    <form
                        className="header-search"
                        onSubmit={e => handleSubmit(e)}
                    >
                        <input
                            type="text"
                            name="search"
                            placeholder="Busca marcas y productos..."
                            onChange={updateSearchInput}
                            value={this.state.searchEntry}
                        />
                        <button
                            type="submit"
                            className={`search-button ${this.state.searchEntry.trim() ? "active" : null}`}
                            disabled={!this.state.searchEntry.trim()}
                        >
                            <svg height="32" width="32">
                                <path
                                    d="M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z"
                                    fill="#6B6B6B"
                                    fillRule="evenodd"
                                />
                            </svg>
                        </button>
                    </form>
                    <div className="header-login">
                        <div onClick={()=>this.props.hiddenShoppingCarContent(true)}><FaShoppingCart  color="white" /></div>
                        <div className="login">
                            <div className="login-title">
                                <div className="l-title">Saiby Alimentos</div>
                                <div className="l-myaccount">Mi perfil <MdKeyboardArrowDown className="l-MdKeyboardArrowDown" /></div>
                            </div>
                            <div className="login-avatar">
                                <img className="l-avatar"
                                    src='https://i.pinimg.com/280x280_RS/2d/4d/27/2d4d27245529ac355e6d522a292015fc.jpg'
                                    alt="avatar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Header