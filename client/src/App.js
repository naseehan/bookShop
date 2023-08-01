import './App.css';
import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from './components/Navbar';
import BookDetails from './pages/BookDetails';
import Cart from './pages/Cart';
import { CartProvider } from './cartContext/cartContext';
import WishList from './pages/WishList';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <CartProvider>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/details' element={<BookDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='wishlist' element={<WishList />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
