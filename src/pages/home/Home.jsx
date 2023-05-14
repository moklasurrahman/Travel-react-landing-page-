import React from 'react'
import './home.scss'
import Topcontainer from './../../components/topContainer/Topcontainer';
import Card from '../../components/card/Card';
const Home = () => {
  return (
    <div className='home'>

      <Topcontainer/>
      <Card/>

    </div>
  )
}

export default Home