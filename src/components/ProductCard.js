import { logDOM } from '@testing-library/react';
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (<>
        <div className={` ${location.pathname == '/store' ? `gr-${grid}` : 'col-3'}`} >
            <Link to=':id' className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src={wish} alt='wishIMG' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src={watch} className='img-fluid' alt='productIMG' />
                    <img src={watch1} className='img-fluid' alt='productIMG' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#bf4800"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>O Smartwatch X2 é mais do que apenas um relógio inteligente; é uma extensão do seu estilo de vida ativo e conectado.</p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link> <img src='images/prodcompare.svg' alt='compareIMG' /> </Link>
                        <Link>
                            <img src={view} alt='viewIMG' />
                        </Link>
                        <Link>
                            <img src={addcart} alt='cartIMG' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
        <div className={` ${location.pathname == '/store' ? `gr-${grid}` : 'col-3'}`} >
            <Link className='product-card position-relative'>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src={wish} alt='wishIMG' />
                    </Link>
                </div>
                <div className='product-image'>
                    <img src='images/watch.jpg' className='img-fluid' alt='productIMG' />
                    <img src='images/speaker.jpg' className='img-fluid' alt='productIMG' />
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Havels</h6>
                    <h5 className='product-title'>Kids headphones bulk 10 pack multi colored for students</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#bf4800"
                    />
                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>O Smartwatch X2 é mais do que apenas um relógio inteligente; é uma extensão do seu estilo de vida ativo e conectado.</p>
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>
                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src={prodcompare} alt='compareIMG' />
                        </Link>
                        <Link>
                            <img src={view} alt='viewIMG' />
                        </Link>
                        <Link>
                            <img src={addcart} alt='cartIMG' />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>

    </>
    )
}

export default ProductCard
