import React from 'react'
import "./Home.css"

import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Harry Potter Box Set: The Complete Collection(Set of 7 Volumes)"
            price={1196.35}
            rating={5}
            image="https://lzd-img-global.slatic.net/g/p/e3a9e9074ba25a9e421fcf9c4b92fca9.jpg_720x720q80.jpg_.webp"
          />
          <Product
            id="49538094"
            title="KENT Hot Air Fryer, (16033), 1350W, Fry, Bake, Grill, Roast & Steam, 8 Pre-set Menu, Less Oil Usage, Smart LED Touch Panel"
            price={5333.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61HCz437mrS._SX425_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Sony WH-1000XM4 Over-Ear Active Noise Cancellation Wireless Headphone with Mic (Bluetooth 5.0, Touch Sensor, Black)"
            price={22900.00}
            rating={3}
            image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605264769/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8977403510814.png/mxw_2736,f_auto"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={9699.00}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={95900.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Sony Bravia 195 cm (77 inches) XR series 4K Ultra HD Smart OLED Google TV XR-77A80J (Black)"
            price={489990.00}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/4151F0tdJHL._SY300_SX300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home