import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className='col-3'>
            <div className='product-card posisition-relative'>
                <div className='product-image'>
                    <img src='images/watch.jpg' alt='productIMG' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#bf4800"
                    />
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link> <img src='images/prodcompare.svg' alt='compareIMG' /> </Link>
                        <Link> <img src='images/view.svg' alt='viewIMG' /> </Link>
                        <Link> <img src='images/add-cart.svg' alt='cartIMG' /> </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard