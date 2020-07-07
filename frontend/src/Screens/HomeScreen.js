import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeScreen = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(
                'http://localhost:5000/api/products'
            );
            setProducts(data);
        };
        fetchData();
        return () => {};
    }, []);
    return (
        <div>
            {' '}
            <ul className="products">
                {products.map((product) => (
                    <li key={product._id}>
                        <div className="product">
                            <Link to={`/product/${product._id}`}>
                                {' '}
                                <img
                                    className="product-image"
                                    src={product.image}
                                    alt="product"
                                />
                            </Link>
                            <div className="product-name">
                                <Link to={`/product/${product._id}`}>
                                    {product.name}
                                </Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">
                                ${product.price}
                            </div>
                            <div className="product-rating">
                                {product.rating} Stars ({product.numReiews}{' '}
                                Reviwes)
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default HomeScreen;
