import './App.css';
import { motion } from 'framer-motion'

import image1 from './img/1.jpg'
import image2 from './img/2.jpg'
import image3 from './img/3.png'
import image4 from './img/4.png'

const images = [image1, image2, image3, image4]

function App() {
  return (
    <div className="App">

      <motion.div className='carrossel1'>
        <motion.div className='inner'>

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
