import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import About from './Components/Pages/Aboutme/About';
import Blog from './Components/Pages/Blog/Blog';
import Service from './Components/Pages/Service/Service';
import Login from './Components/Pages/Login/Login/Login'
import Register from './Components/Pages/Login/Register/Register';
import Header from './Components/Pages/Shared/Header/Header';
import NotFound from './Components/Pages/NotFound/NotFound';

import CheckOut from './Components/Pages/CheckOut/CheckOut';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/checkout" element={<RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>} >
          </Route>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="*" element={<NotFound></NotFound>} />
      </Routes>
    </div>
  );
}

export default App;
