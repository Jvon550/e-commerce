
import './App.css'
import ItemImg from './assets/item img.jpg'

// components
import Item from './components/Item'
function App() {

  return (
  <div className='my-container'>  
  <header>
    | cart item (30)pcs | profile | logout | 
  </header>
  <article>
    <div>
      <div className="products">
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
        <Item img={ItemImg} name='amazing sandals' price='1,000'/>
      </div>
    </div>
    <div className='load-more'>
    <div>load more</div>
  </div>
  </article>
  {/* <aside>sidebar</aside> */}

  <footer>footer</footer>
  </div>
  );
}

export default App
 

