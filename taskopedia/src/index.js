import ReactDOM from 'react-dom/client';
import "./CSS/style.css";
import TempHeader from "./layout/header";
import Footer from './layout/footer';
import MainBody from './MainBody';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <div className='container'>
    <TempHeader />
    <MainBody />
    <Footer />
  </div>
);
