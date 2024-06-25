import React from 'react'
import Info from '../info/Info'
import About from '../about/about'
import "./info-card.css"
import Interests from '../interests/interests'
import Footer from '../footer/footer'

function InfoCard() {
    const info = {
        photoUrl : '/photo.jpg',
        infoName : 'Nguyen Song Nghiem',
        infoPosition : 'Fullstack Developer',
        infoEmail : 'nguyensongnghiem@gmail.com'
       
      }
  return (
    <div className='info-card'>
         <Info info = {info} ></Info>
         <About></About>
         <Interests></Interests>
         <Footer></Footer>
    </div>
  )
}

export default InfoCard