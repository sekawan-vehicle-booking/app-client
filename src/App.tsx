import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Root Page</h1>,
    },
    {
      path: "/about",
      element: <h1>About Page</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
