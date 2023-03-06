
import React, { useEffect } from 'react'
import { useState } from 'react';
import Data from '../Data';
import { useRef } from 'react';


const Main = () => {

  const [data, setdata] = useState([Data]);
  const [page, setpage] = useState(0)
  const { name, images, role, bio } = Data.crew[page];
  // const container = useRef(null);

  const changeclick = (index) => {

    index = parseInt(index)
    setpage(index)
  }

  const choose = ['A', 'B', 'C', 'D']



  console.log(images.png.substring(1));
  let path = `starter-code` + images.png.substring(1)

  return (
    <main >
       <div className='crewdestination'>  <span> 01</span> <p> meet your crew</p>
        </div> 

        <div className='main'>

        
      
    
      <div className='firstcrew'>
        <div>

          <img className='crew' src={path} />
        </div>
      </div>

      <div className='secondcrew'>
        <div className='crewdiv'>
          {
            choose.map((item, index) => {
              return (
                <div onClick={() => changeclick(index)} key={index} className={`crewdivdiv ${index === page ? 'activecrew' : ''}`} >

                </div>
              )

            })
          }
        </div>

        <div className='crewword'>

        <p className='role'>{role}</p>

        <h1 className='crewname'>{name}</h1>
        <p className='bio'>{bio}</p>

        </div>



      </div>

      </div>

    </main>
  )
}

export default Main