import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const Signup = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title='Account' />

            <div className='login-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card'>
                                <h3 className='text-center mb-3'>Create Account</h3>
                                <form action=''
                                    className='d-flex flex-column gap-15'>
                                    <div>
                                        <input type='text'
                                            name='firstname'
                                            placeholder='First name' className='form-control' />
                                    </div>
                                    <div className='mt-1'>
                                        <input type='text'
                                            name='lastname'
                                            placeholder='Last name' className='form-control' />
                                    </div>

                                    <div className='mt-1'>
                                        <input type='email'
                                            name='email'
                                            placeholder='Email' className='form-control' />
                                    </div>

                                    <div className='mt-1'>
                                        <input type='password'
                                            name='password'
                                            placeholder='Password' className='form-control' />
                                    </div>

                                    <div>

                                        <div className='
                                    mt-3 
                                    d-flex justify-content-center gap-15 align-items-center'>
                                            <button className='button border-0' type='submit'>Create</button>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup;
