import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//pages 
import Home from '../../pages/Home'
import Products from '../../pages/Products'
import Product from '../../pages/Product'
import Cart from '../../pages/Cart'

//component
import CartIcon from "../cartIcon/CartIcon";

class Header extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to='/'>MobileStore</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/products">Mobiles</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cart">Cart</Link>
                                </li>
                            </ul>
                        </div>
                        <CartIcon />
                    </nav>

                    <Route path='/' component={Home} exact />
                    <Route path='/products' component={Products} exact />
                    <Route path='/products/:id' component={Product} />
                    <Route path='/cart' component={Cart} />

                </div>
            </Router>
        )
    }
}

export default Header