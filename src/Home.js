import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__cointainer">
                <img
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
                    alt="home_banner"/>

                    <div className="home__row">
                        <Product 
                            id="545445"
                            title="The learn startup"
                            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                            price={14.99}
                            rating={5}
                        />
                        <Product 
                            id="43555"
                            title="Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR"
                            image="https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SX569_.jpg"
                            price={7.99}
                            rating={4}
                        />
                    </div>
                    <div className="home__row">
                    <Product 
                            id="43535"
                            title="Foamily Premium Hypoallergenic Stuffer Pillow Insert Sham Square Form Polyester, 18 x 18, White"
                            image="https://images-na.ssl-images-amazon.com/images/I/71iArV-kskL._AC_SX679_.jpg"
                            price={8.99}
                            rating={4}
                        />
                        <Product 
                            id="86575"
                            title="Raz Imports 3.5X5 Moving Flame Grey Chalky Pillar Candle - Flameless Lighting Accent and Battery Operated Flickering Light Source with Timer - Fake Candles for Living Room, Patio and Bedroom"
                            image="https://images-na.ssl-images-amazon.com/images/I/61WGdkj5BgL._AC_SX679_.jpg"
                            price={44.99}
                            rating={5}
                        />
                        <Product 
                            id="466686"
                            title="Funko Pop! Star Wars: The Mandalorian - The Child with Frog, Multicolor"
                            image="https://images-na.ssl-images-amazon.com/images/I/51%2BeEdKmT9L._AC_SX679_.jpg"
                            price={7.94}
                            rating={5}
                        />
                    </div>
                    <div className="home__row">
                    <Product 
                            id="53777554"
                            title="CODE FLORIST 2200 PCS Dark-Red Silk Rose Petals Wedding Flower Decoration"
                            image="https://images-na.ssl-images-amazon.com/images/I/71uSb4HsoHL._AC_SX522_.jpg"
                            price={9.99}
                            rating={4}
                        />
                    </div>
            </div>
        </div>
    )
}

export default Home
