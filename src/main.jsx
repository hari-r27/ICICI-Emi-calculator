import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Calculator from './Calculator';
import CalculaterEmi from './CalculaterEmi.jsx';

createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <CalculaterEmi/>
  </>,
)
