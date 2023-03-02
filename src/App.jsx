import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import AddPage from "./pages/AddPage/AddPage";
import UpdatePage from "./pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "addPage", element: <AddPage /> },
      { path: "listPage", element: <ListPage /> },
      { path: "listPage/update/:itemId", element: <UpdatePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
