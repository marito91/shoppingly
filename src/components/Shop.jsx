import React, { useEffect } from 'react';

// Components
import Clothes from './Shop/Clothes'
import hostbase from './vars.js';

export default function Shop() {
    console.log(hostbase)


  return (
    <>
        <Clothes />
    </>
  )
}
