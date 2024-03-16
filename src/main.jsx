import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

//redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";

//router
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

//components
import ReactRouterWeb from "./components/React Router Web/ReactRouterWeb.jsx";
import Layout from "./Layout.jsx";
import StarRating from "./components/Star_Rating/StarRating.jsx";

//method 1
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <ReactRouterWeb />,
//       },
//       {
//         path: "star-rating",
//         element: <StarRating />,
//       },
//     ],
//   },
// ]);

//method 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<Layout />}>
      <Route
        path='react-router-web'
        element={<ReactRouterWeb />}
      />
      <Route
        // loader={api call or imported api function} => this will load or fetch data when you hover on the link of this element
        path='star-rating'
        element={<StarRating />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
