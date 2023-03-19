import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.scss';

const Layout=()=>{
  return <>
    <Navbar/>
    <Outlet/>
    <Footer/>
  </>
}

function App() {
  const router=createBrowserRouter([
    {path:'/',
    element:<Layout/>,
    children:[
      {path:'/',element:<Home/>},
      {path:'/products/:id',element:<Products/>},
      {path:'/product/:id',element:<Product/>},
    ]
  },
  ]);

  return <div className="app">
      <RouterProvider router={router}/>
    </div>
}

export default App;
