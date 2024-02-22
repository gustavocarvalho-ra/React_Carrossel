import './App.css';
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="App">
      <motion.h1 animate={{x: 200, y: 100}}>a</motion.h1>
    </div>
  );
}

export default App;
