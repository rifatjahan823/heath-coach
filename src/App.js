import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import About from './Components/Pages/Aboutme/About';
import Blog from './Components/Pages/Blog/Blog';
import Login from './Components/Pages/Login/Login/Login'
import Register from './Components/Pages/Login/Register/Register';
import Header from './Components/Pages/Shared/Header/Header';
import NotFound from './Components/Pages/NotFound/NotFound';

import CheckOut from './Components/Pages/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Footer from './Components/Pages/Shared/Footer/Footer';
import Service from './Components/Pages/Service/Service';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="dynamicCheckout/:id" element={<CheckOut></CheckOut>}></Route>
          <Route path="/checkout" element={<RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>} >
          </Route>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
