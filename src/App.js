import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/common_page_elements/footer/Footer';
import Header from './components/common_page_elements/header/Header';
import Main from './components/common_page_elements/main/Main';
import Loader from './components/UI/loader/Loader';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;