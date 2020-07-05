import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };
    return (
        <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>&#9776;</button>
                    <a href="index.html">amazon</a>
                </div>
                <div className="header-links">
                    <a href="cart.html">carts </a>
                    <a href="signing.html">Sign in</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Shoping categories</h3>
                <button className="sidebar-close-button" onClick={closeMenu}>
                    X
                </button>
                <ul>
                    <li>
                        <a href="index.html">Pants</a>
                    </li>
                    <li>
                        <a href="index.html">Shirts</a>
                    </li>
                </ul>
            </aside>

            <main className="main">
                <div className="content">
                    <ul className="products">
                        <li>
                            <div className="product">
                                <img
                                    className="product-image"
                                    src="/images/d1.jpg"
                                    alt="product"
                                />
                                <div className="product-name">
                                    <a href="index.html">Slin Shirt</a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">
                                    4.5 Stars (10 Reviwes)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img
                                    className="product-image"
                                    src="/images/d1.jpg"
                                    alt="product"
                                />
                                <div className="product-name">
                                    <a href="index.html">Slin Shirt</a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">
                                    4.5 Stars (10 Reviwes)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img
                                    className="product-image"
                                    src="images/d1.jpg"
                                    alt="product"
                                />
                                <div className="product-name">
                                    <a href="index.html">Slin Shirt</a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">
                                    4.5 Stars (10 Reviwes)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img
                                    className="product-image"
                                    src="images/d1.jpg"
                                    alt="product"
                                />
                                <div className="product-name">
                                    <a href="index.html">Slin Shirt</a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">
                                    4.5 Stars (10 Reviwes)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img
                                    className="product-image"
                                    src="images/d1.jpg"
                                    alt="product"
                                />
                                <div className="product-name">
                                    <a href="index.html">Slin Shirt</a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">
                                    4.5 Stars (10 Reviwes)
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="product">
                                <img
                                    className="product-image"
                                    src="images/d1.jpg"
                                    alt="product"
                                />
                                <div className="product-name">
                                    <a href="index.html">Slin Shirt</a>
                                </div>
                                <div className="product-brand">Nike</div>
                                <div className="product-price">$60</div>
                                <div className="product-rating">
                                    4.5 Stars (10 Reviwes)
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </main>
            <footer className="footer">all right reserved</footer>
        </div>
    );
}

export default App;
