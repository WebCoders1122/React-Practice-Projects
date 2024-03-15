import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

//redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//components
import ReactRouterWeb from "./components/React Router Web/ReactRouterWeb.jsx";
import Layout from "./Layout.jsx";
import StarRating from "./components/Star_Rating/StarRating.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ReactRouterWeb />,
      },
      {
        path: "star-rating",
        element: <StarRating />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <App /> */}
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);
