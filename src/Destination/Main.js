import React, { useEffect } from 'react'
import { useState } from 'react';
import Data from '../Data';


const Main = () => {

  const [data, setdata] = useState([Data]);
  const [page, setpage] = useState(0)
  const { name, images, description, distance, travel } = Data.destinations[page]

  const allcategories = Data.destinations.map((item) => item.name);
  const [categories, setcategories] = useState(allcategories);
  console.log(categories);


  const changeclick = (index) => {
    let indexx = parseInt(index)
    setpage(indexx)
  }

  // const [data, setdata] = useState([]);


  // async function fetchData() {
  //   const response = await fetch('data.json');
  //   const json = await response.json();
  //   setdata(json);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  let path = `starter-code` + images.png.substring(1)
  // console.log(path)



  return (
    <main  className='maindestination'>
      <div className='firstdestination'>

        <div className='destination'>  <span> 01</span> <p> Pick your destination</p></div>

        <div>

          <img className='moon' src={path} />
        </div>

      </div>

      <div className='seconddestination'>
        <div className='names'>
          {categories.map((item, index) => {
            return (
              <>
                <p className={`moonp ${index==page?'active':''}`} key={index} onClick={() => changeclick(index)}>{item} </p>
                <div className='underline'></div>
              </>
            )
          })}

        </div>
        <h1 className='moonname'>{name}</h1>
        <p className='description'>{description}</p>
        <div className='destinationcover'>

          <div className='totaldistance'>
          <p className='avgdistance'>AVG. DISTANCE</p>
        <h2 className='distance'>{distance}</h2>
          </div>

          <div className='totaltravel'>
          <p className='esttravel'>Est. travel time</p>
        <h2 className='travel'>{travel}</h2>
          </div>

        
        
        </div>



      </div>






    </main>
  )
}

export default Main