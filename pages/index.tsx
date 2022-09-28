import { useState } from 'react';
import Home from "./components/home"
// import styles from "../Project-Raiders-Content/style_components/home.module.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home />
    </>
  )
}

export default App
