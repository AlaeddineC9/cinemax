import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from"react-router-dom";
import Favorites from './compenent/Favorite.jsx';
import Account from './compenent/Account.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "Favorites",
    element: <Favorites/>,
  },

  {
    path: "Account",
    element: <Account />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
