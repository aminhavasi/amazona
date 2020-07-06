import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

const ProductScreen = (props) => {
    console.log(props.match.params.id);
    const product = data.products.find((x) => x._id === props.match.params.id);
    return (
        <div>
            <div>
                <Link to="/">back to result</Link>
            </div>
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>{product.name}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default ProductScreen;
