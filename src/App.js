import { useState, useEffect, useRef } from 'react';
import './App.css';
import { motion } from 'framer-motion'

import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.png'
import image4 from './img/4.png'

const images = [image1, image2, image3, image4]

function App() {
  const carrossel = useRef()
  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carrossel.current?.scrollWidth, carrossel.current?.offsetWidth)
    setWidth(carrossel.current?.scrollWidth - carrossel.current?.offsetWidth)
  }, [])
  return (
    <div className="App">

      <motion.div ref={carrossel} className='carrossel' whileTap={{ cursor: "grabbing"}}>
        <motion.div className='inner'
        drag='x'
        dragConstraints={{right: 0, left: -width}}
        >

          {images.map(image => (
            <motion.div className='item' key={image}>
              <img src={image} alt='Img'/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>

    </div>
  );
}

export default App;
