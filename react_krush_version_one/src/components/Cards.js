import React from 'react'
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>PRODUCT AND SERVICES WE OFFER</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src='images/img-17.jpg'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='Websites'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-18.jpg'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='Mobile Applications'
                            path='/services'
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src='images/img-12.jpg'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing eli.'
                            label='Custom Software'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-13.jpg'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            label='Consultation'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-11.jpg'
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                            label='IOT Technology'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
