
import './App.css'
// import ItemImg from './assets/item img.jpg'
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import {RequireAuth} from 'react-auth-kit';
// components
// import Item from './components/Item'
import Login from './components/Login';
import AccountRegister from './components/AccountRegister';
// import Navigation from './components/Navigation';
import Home from './components/Home';
import Layout from './components/Layout';
import NoPage from './components/NoPage';

function App() {

  return (
  // <div className='my-container'>  
  // <header>
  //   | cart item (30)pcs | profile | logout | 
  // </header>
  // <article>
  //   <div>
  //     <div className="products">
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //       <Item img={ItemImg} name='amazing sandals' price='1,000'/>
  //     </div>
  //   </div>
  //   <div className='load-more'>
  //   <div>load more</div>
  // </div>
  // </article>
  // {/* <aside>sidebar</aside> */}

  // <footer>footer</footer>
  // </div>\

  <>
  {/* <AccountRegister /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>

          <Route index element={<RequireAuth loginPath='login'>
            <Home/>
          </RequireAuth>} />
          <Route path='login' element={<Login/>} />
          <Route path="signin" element={<AccountRegister/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </Router>
  </>
  );
}

export default App
 

