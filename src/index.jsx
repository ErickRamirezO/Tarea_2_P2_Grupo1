import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Aves from './Aves';
import Anfibios from './Anfibios';
import Horarios from './Horarios';
import Eventos from './Eventos';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/horarios",
    element: <Horarios />,
  },
  {
    path: "/eventos",
    element: <Eventos />,
  },
  {
    path: "/anfibios",
    element: <Anfibios />,
  },
  {
    path: "/aves",
    element: <Aves />,
  },

  {
    path: "/anfibios",
    element: <Anfibios />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)