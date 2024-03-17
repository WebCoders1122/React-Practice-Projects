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
import Accordian from "./components/Accordion/Accordian.jsx";
import ImageSlider from "./components/Image Slider/ImageSlider.jsx";
import LoadMoreButton, {
  initialLoading,
} from "./components/Load-More-Button/LoadMoreButton.jsx";
import RandomColor from "./components/Random Color Generator/RandomColor.jsx";

//data loader for components
import { imageSliderLoader } from "./components/Image Slider/ImageSlider.jsx";
import { useDispatch } from "react-redux";
import { initialLoaderAsync } from "./components/Load-More-Button/loadMoreSlice.js";
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

function Index() {
  const dispatch = useDispatch();
  //method 2
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}>
        <Route
          path='accordian'
          element={<Accordian />}
        />
        <Route
          loader={imageSliderLoader}
          path='image-slider'
          element={<ImageSlider />}
        />
        <Route
          loader={initialLoading(dispatch)}
          path='product-loader'
          element={<LoadMoreButton />}
        />
        <Route
          path='random-color-generator'
          element={<RandomColor />}
        />
        <Route
          // loader={api call or imported api function} => this will load or fetch data when you hover on the link of this element
          path='star-rating'
          element={<StarRating />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* <App /> */}
    {/* <RouterProvider router={router} /> */}
    <Index />
  </Provider>
  // </React.StrictMode>
);
