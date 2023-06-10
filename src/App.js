import Header from './components/header/header.component';
import SignIn from './components/sign-in/sign-in.component';
import Home from './routes/home/home.component';
import Shops from './routes/shops/shops.component';
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='shop' element={<Shops/>} />
        <Route path='sign-in' element={<SignIn/>} />
      </Route>
    </Routes>
  );
};

export default App;