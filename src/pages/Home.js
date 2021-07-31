import React from 'react'

// Importing Components
import NavbarComp from '../components/NavbarComp';
import View1 from '../components/View1';
import View2 from '../components/View2';
import View3 from '../components/View3';
import View4 from '../components/View4';
import View5 from '../components/View5';
import View6 from '../components/View6';


import Fotter from '../components/Fotter';

const Home = () => {
    return (
        <>
            <NavbarComp />
            <View1 />
            <View2 />
            <View3 />
            <View4 />
            <View5 />
            <View6 />
            <Fotter />
        </>
    )
}

export default Home;