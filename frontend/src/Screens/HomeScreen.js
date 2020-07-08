import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listproducts } from './../actions/productAction';

import axios from 'axios';

const HomeScreen = (props) => {
    const productList = useSelector((state) => state.productList);
    const dispatch = useDispatch();
    const { error, products, loading } = productList;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        dispatch(listproducts());
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
