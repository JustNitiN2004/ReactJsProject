import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import LogIn from './LogIn';
import ChangePass from './ChangePass';
import ForgotPass from './ForgotPass';
import Sidebar from './Sidebar';
import InputField from './InputField';
import Counter from './Counter';
import BasicSum from './BasicSum';
import StopWatch from './StopWatch';
import CtrLocalStorage from './CtrLocalStorage';
import BasicCalc from './BasicCalc';
import GrabValue from './GrabValue';
import NameCalling from './NameCalling';
import CounterHook from './CounterHook';
import Todo from './TodoMap';
import ConditionalRendering from './ConditionalRendering';
import Form from './Form';
import Navbar from './Navbar';
import Products from './Products';
import NewsApi from './NewsApi';
import Logout from './Logout';
import Profile from './Profile';
import ProductDetails from './ProductDetail';
import Cart from './Cart';
import Checkout from './Checkout';
import MyOrders from './myOrder';
 

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/changePass" element={<ChangePass />} />
            <Route path="/forgotPass" element={<ForgotPass />} />
            <Route path="/inputField" element={<InputField />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/basicSum" element={<BasicSum />} />
            <Route path="/stopWatch" element={<StopWatch />} />
            <Route path="/ctrLocalStorage" element={<CtrLocalStorage />} />
            <Route path="/basicCalc" element={<BasicCalc />} />
            <Route path="/grabValue" element={<GrabValue />} />
            <Route path="/form" element={<Form />} />
            <Route path="/nameCalling" element={<NameCalling name="Kamil" />} />
            <Route path="/counterHook" element={<CounterHook />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/conditionalRendering" element={<ConditionalRendering />} />
            <Route path="/products" element={<Products />} />
            <Route path="/newsApi" element={<NewsApi />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/myOrder" element={<MyOrders />} />
           
            <Route path="*" element={<h2>404 - Page Not Found</h2>} />
          </Routes>
        </div>
      </>
    </Router>
  );
}

export default App;
