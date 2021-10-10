import React from 'react'
import "../../src/App.css";
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Hero from "../components/Hero";


function Home() {
    return (
        <>
           <Hero/>
           <Cards/>
           <Footer/>
        </>
    )
}

export default Home
