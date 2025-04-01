import React from 'react'
import hero from '../resourses/hero.jpg'
import Popular from '../component/Popular'

function Home() {
  return (
    <>
     <div className='wrapper-h'>
      <div className='first-col'>
        <h2>Wellcome to my stock Market App</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, incidunt dolor? Illo veniam repudiandae consectetur inventore autem, animi unde ea amet corporis debitis nihil fuga, quia molestias accusamus soluta nulla.
        </p>
        <button>Explore</button>
      </div>
      <div className='second-col'>
        <img src={hero} alt='hero'/>
      </div>
    </div>
    <Popular/>
    </>
   
  )
}

export default Home
