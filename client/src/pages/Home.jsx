import React from 'react'
import Section1 from '../components/Section1/Section1'
import Cards from '../components/Cards/Cards'
import Section2 from '../components/Section2/Section2'
import Section3 from '../components/Section3/Section3'
import Section4 from '../components/Section4/Section4'
import "./Home.scss"

const Home = () => {
    return (
        <div className='home'>
            <Section1/>
            <Cards/>
            <Section2/>
            <Section3/>
            <Section4/>
        </div>
    )
}

export default Home