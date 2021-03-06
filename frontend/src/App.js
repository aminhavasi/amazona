import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
    const openMenu = () => {
        document.querySelector('.sidebar').classList.add('open');
    };
    const closeMenu = () => {
        document.querySelector('.sidebar').classList.remove('open');
    };
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="brand">
                        <button onClick={openMenu}>&#9776;</button>
                        <Link to="/">amazona</Link>
                    </div>
                    <div className="header-links">
                        <a href="cart.html">carts </a>
                        <a href="signing.html">Sign in</a>
                    </div>
                </header>
                <aside className="sidebar">
                    <h3>Shoping categories</h3>
                    <button
                        className="sidebar-close-button"
                        onClick={closeMenu}
                    >
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
                        <Route path="/product/:id" component={ProductScreen} />
                        <Route exact path="/" component={HomeScreen} />
                    </div>
                </main>
                <footer className="footer">all right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
