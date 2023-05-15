import ImgSlider from './ImgSlider';
import React from 'react'
const Zpp =()=>{
  const slides =[

    { url:"http://localhost:3000/img-1.jpg"  },
    { url:"http://localhost:3000/img-2.jpg"  },
    { url:"http://localhost:3000/img-3.jpg"  },
    { url:"http://localhost:3000/img-4.jpg"  },
    { url:"http://localhost:3000/img-5.jpg"  },
 ];

const containerStyles ={
 width:'500px',
 height:'280px',
 margin:"0 auto",
}


  return (
   
      <React.Fragment>   

      <h1>Hello World</h1>

      <div style={containerStyles}>
        <ImgSlider slides={slides} />
        </div>
     

      </React.Fragment>
    
  )
}

export default Zpp;