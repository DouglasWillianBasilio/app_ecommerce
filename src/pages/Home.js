import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner position-relative'>
                <img
                  src='/images/painel-tv.jpg'
                  className='img-fluid rounded-3'
                  alt='mainBanner' />

                <div className='main-banner-content position-absolute'>
                  <h4> TELEVISORES </h4>
                  <h5>A partir de R$ 650</h5>
                  <p>Em ate 3x sem Juros</p>
                  <Link className='button'> COMPRAR AGORA </Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='d-flex flex-wrap gap-12 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <img
                    src='/images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner' />

                  <div className='small-banner-content position-absolute'>
                    <h4> BEST SALE </h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00  or <br /> $64.62/mo.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img
                    src='/images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner' />

                  <div className='small-banner-content position-absolute'>
                    <h4> 15% OFF </h4>
                    <h5>Smartwatch 7</h5>
                    <p>Shop the latest band <br /> styles colors</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img
                    src='/images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner' />

                  <div className='small-banner-content position-absolute'>
                    <h4> NEW ARRIVAL </h4>
                    <h5>Buy IPad Air</h5>
                    <p>From $599  or <br /> $49.91/mo.</p>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <img
                    src='/images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='mainBanner' />

                  <div className='small-banner-content position-absolute'>
                    <h4> FREE ENGRAVING </h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br /> ultra-low distortion</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div>
                  <img src='images/service.png' alt='services' />
                  <div className='d-flex align-items-center gap-15'>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $100</p>
                  </div>
                </div>
                <div>
                  <img src='images/service-02.png' alt='services' />
                  <div className='d-flex align-items-center gap-15'>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div>
                  <img src='images/service-03.png' alt='services' />
                  <div className='d-flex align-items-center gap-15'>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div>
                  <img src='images/service-04.png' alt='services' />
                  <div className='d-flex align-items-center gap-15'>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price</p>
                  </div>
                </div>
                <div>
                  <img src='images/service-05.png' alt='services' />
                  <div className='d-flex align-items-center gap-15'>
                    <h6>Secury Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='cameraIMG' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='cameraIMG' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='TvIMG' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphoneimg' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='cameraIMG' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='cameraIMG' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='TvIMG' />
                </div>

                <div className='d-flex gap align-items-center'>
                  <div>
                    <h6>Smart Watches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='headphoneimg' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Features Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <h3 className='section-heading'>Produtos Famosos</h3>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/watch.jpg'
                  className='img-fluid'
                  alt='laptopIMG' />
                <div className='famous-content position-absolute'>
                  <h5>IMAGEM PRETA</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399or $16,62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/watch.jpg' className='img-fluid' alt='laptopIMG' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>TELEVISORES</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $399or $16,62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/watch.jpg' className='img-fluid' alt='laptopIMG' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>CONTROLES</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $399or $16,62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img src='images/watch.jpg' className='img-fluid' alt='laptopIMG' />
                <div className='famous-content position-absolute'>
                  <h5 className='text-dark'>PLACAS</h5>
                  <h6 className='text-dark'>Smart Watch Series 7</h6>
                  <p className='text-dark'>From $399or $16,62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className='spacial-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row gap-5'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>

          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='marque-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='maquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'> <img src='images/brand-01.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-02.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-03.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-04.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-05.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-06.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-07.png' alt='brand' /> </div>
                  <div className='mx-4 w-25'> <img src='images/brand-08.png' alt='brand' /> </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Latest Blogs</h3>
            </div>

          </div>
          <div className='row'>
            <div className='col-3'>
            <BlogCard />
            </div>
            <div className='col-3'>
            <BlogCard />
            </div>
            <div className='col-3'>
            <BlogCard />
            </div>
            <div className='col-3'>
            <BlogCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
