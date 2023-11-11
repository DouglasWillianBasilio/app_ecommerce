import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { FaHome, FaInfo } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title='Contact Us' />

      <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.2944626491812!2d-51.15478282508672!3d-23.28605235153485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb44ec14e4fe6d%3A0x87dd14bdaa97986f!2sLondrina%20Norte%20Shopping!5e1!3m2!1spt-PT!2sbr!4v1699740466146!5m2!1spt-PT!2sbr"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text'
                        className='form-control'
                        placeholder='Your name...' />
                    </div>
                    <div>
                      <input type='email'
                        className='form-control'
                        placeholder='Your email...' />
                    </div>
                    <div>
                      <input type='text'
                        className='form-control'
                        placeholder='Your WhatsApp...' />
                    </div>
                    <div>
                      <textarea
                        name=''
                        id=''
                        className='w-100 form-control'
                        cols='38'
                        rows='4'
                        placeholder='Menssagem'
                      ></textarea>
                    </div>
                    <div>
                      <button className='button'>Enviar</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Set in Touch Witch Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li> <FaHome className='icons' /> Av Lucia Helena Gonçalves Viana, 916 </li> 
                      <li> <BsFillTelephoneFill className='icons' /> +55 43 98481-2342</li> 
                      <li> <AiOutlineMail className='icons' /> exemplo@gmail.com</li> 
                      <li> <FaInfo className='icons' /> Monday - Friday 8 AM - 6 PM</li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
