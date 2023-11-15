import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from 'react-router-dom';


const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title='Dynamic Blog Name' />

            <div className='blog-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='single-blog-card'>
                                
                                <Link to='/blogs' className='back d-flex align-items-center gap-10'> <RiArrowGoBackFill className='fs-4' /> Go back to Blogs</Link>
                                <h3 className='title'>Precisa colocar um titulo aqui estou sem criatividade</h3>
                                <img src='/images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
                                <p>Aqui tambem precisa por alguma coisa no caso seria um conteudo eae? Coloca algo ai pa nois!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleBlog;
