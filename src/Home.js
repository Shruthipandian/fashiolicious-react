import React from 'react';
import "./Home.css";
import Product from './Product';

const Home = () => {
    return (
        <div className="home">
        <div className="home_container">
        <img  className="home_image"src="banner6.png"/>
        <div className="home_row">
        <Product title="NEW ARRIVAL:ENTHIC GOWN"
        price={1500}
        image={"banner6.png"}
        rating={5} />
        <Product />
        

        </div>
        <div className="home_row">
        <Product />
        <Product />
        <Product />

        </div>
        <div className="home_row">
        <Product />


        </div>

        </div>
            
        </div>
    )
}

export default Home
