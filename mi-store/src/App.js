// import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider from './components/Slider.js';
import data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProduct from './components/StarProduct.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js';
import HotAccessories from './components/HotAccessories.js';
import ProductReviews from './components/ProductReviews.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptios from './components/NavOptios.js';
import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />

        {/* <Route exact path='/' element={< Home />}></Route> */}

        {/* <NavOptios
         
       
          
        
     
          
         
        /> */}

        <Routes>
          <Route
            exact
            path='/miPhones'
            element={<NavOptios miPhones={data.miPhones} />}
          >
            {' '}
          </Route>
          <Route
            exact
            path='/redmiPhones'
            element={<NavOptios redmiPhones={data.redmiPhones} />}
          >
            {' '}
          </Route>
          <Route exact path='/tv' element={<NavOptios tv={data.tv} />}>
            {' '}
          </Route>
          <Route
            exact
            path='/laptops'
            element={<NavOptios laptop={data.laptop} />}
          >
            {' '}
          </Route>
          <Route
            exact
            path='/lifestyle'
            element={
              <NavOptios fitnessAndLifeStyle={data.fitnessAndLifeStyle} />
            }
          >
            {' '}
          </Route>
          <Route exact path='/home' element={<NavOptios home={data.home} />}>
            {' '}
          </Route>
          <Route exact path='/audio' element={<NavOptios audio={data.audio} />}>
            {' '}
          </Route>

          <Route
            exact
            path='/accessories'
            element={<NavOptios accessories={data.accessories} />}
          >
            {' '}
          </Route>
        </Routes>

        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Heading text='STAR PRODUCTS' />
        <StarProduct starProduct={data.starProduct} />
        <Heading text='HOT ACCESSORIES' />
        <HotAccessoriesMenu />
        <Routes>
          <Route
            exact
            path='/music'
            element={
              <HotAccessories
                music={data.hotAccessories.music}
                musicCover={data.hotAccessoriesCover.music}
              />
            }
          ></Route>
          <Route
            exact
            path='/smartDevice'
            element={
              <HotAccessories
                smartDevice={data.hotAccessories.smartDevice}
                smartDeviceCover={data.hotAccessoriesCover.smartDevice}
              />
            }
          ></Route>

          <Route
            exact
            path='/home'
            element={
              <HotAccessories
                home={data.hotAccessories.home}
                homeCover={data.hotAccessoriesCover.home}
              />
            }
          ></Route>
          <Route
            exact
            path='/lifestyle'
            element={
              <HotAccessories
                lifeStyle={data.hotAccessories.lifeStyle}
                lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
              />
            }
          ></Route>
          <Route
            exact
            path='/mobileAccessories'
            element={
              <HotAccessories
                mobileAccessories={data.hotAccessories.mobileAccessories}
                mobileAccessoriesCover={
                  data.hotAccessoriesCover.mobileAccessories
                }
              />
            }
          ></Route>
        </Routes>

        <Heading text='PRODUCT REVIEWS' />

        <ProductReviews productReviews={data.productReviews} />

        <Heading text='VIDEOS' />

        <Videos videos={data.videos} />

        <Heading text='IN THE PRESS' />

        <Banner banner={data.banner} />

        <Footer footer={data.footer} />
      </BrowserRouter>
    </>
  );
}

export default App;
