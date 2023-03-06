import React from "react";
import Data from "../Data";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {

  const [data, setdata] = useState([Data]);
  const [page, setpage] = useState(0)
  const { name, images, description} = Data.technology[page];
  let path=`starter-code` + images.landscape.substring(1)


  const number=[
    1,2,3
  ]

const changenumber=(index)=>{
  index=parseInt(index)
  setpage(index)


}



 

  


  return (
    <main >
      <div className="destination">
          <span> 03</span> <p> space launch 101</p>
          </div>

      <div className="maintechnology">

      
      <div className="firsttechnology">

          <div className="launch" style={{
        width: '100%',
        minHeight:'50vh',
        backgroundImage: `url(${path})`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover'
      }}>
  
        </div>

        </div>
    


      <div className="secondtechnology">
        <div className="divcircle">
          {number.map((item,index)=>{

            return (
              <div className={`circle ${index===page?'activetech':''}`} onClick={()=>changenumber(index)}> 
                <p>{item}</p>
              </div>
            )
            })}



        </div>
        <div className="technologyword">
          <p className="terminology"> THE TERMINOLOGY...</p>
          <h2 className="vehicle">{name}</h2>
          <p className="launchword">{description}</p>



        </div>

      </div>
      </div>
    </main>
  );
};

export default Main;
