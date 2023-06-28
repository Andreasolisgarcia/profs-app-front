import React from 'react';
import Header from '../components/Homepage/Header';
import CardSlider from '../components/Homepage/CardSlider';
import Steps from '../components/Homepage/Steps';


const Home = ({courses}) => {

    return (
        <>
            <Header/>
            <CardSlider courses={courses}/>
            <Steps/>
        </>
    );
};

export default Home;