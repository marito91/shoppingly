import React from 'react';

// Components
import Banner from './Home/Banner'
import Promo from './Home/Promo'
import Sections from './Home/Sections'
import Information from './Home/Information'
import Signup from './Home/Signup'

export default function Home() {
  return (
        <>
            <Promo />
            <Banner />
            <Sections />
            <Information />
            <Signup />
        </>
    )
}
