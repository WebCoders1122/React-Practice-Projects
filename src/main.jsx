import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

//redux
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { useDispatch } from "react-redux";

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
import ImageSlider, {
  imageSliderLoader,
} from "./components/Image Slider/ImageSlider.jsx";
import LoadMoreButton, {
  initialLoading,
} from "./components/Load-More-Button/LoadMoreButton.jsx";
import RandomColor from "./components/Random Color Generator/RandomColor.jsx";
import TreeView from "./components/tree-view/TreeView.jsx";
import QR_Code from "./components/QR Code/QRCode.jsx";
import Experiment from "./components/Experiments/Experiment.jsx";
import Scroll_Indicator, {
  Scroll_Indicator_loader,
} from "./components/Scroll_Indicator/Scroll_Indicator.jsx";
import CustomTabs from "./components/custom-tabs/CustomTabs.jsx";
import CustomPopUp from "./components/custom-popup/CustomPopUp.jsx";
import GithubSearch from "./components/Github-Search/GithubSearch.jsx";
import AutoCompleteSearch from "./components/autocomplete-search/AutoCompleteSearch.jsx";
import TicTacToe from "./components/tic-tac-toe/TicTacToe.jsx";
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
          path='custom-tabs'
          element={<CustomTabs />}
        />
        <Route
          // loader={api call or imported api function} => this will load or fetch data when you hover on the link of this element
          path='star-rating'
          element={<StarRating />}
        />
        <Route
          path='tree-view'
          element={<TreeView />}
        />
        <Route
          path='qr-code'
          element={<QR_Code />}
        />
        <Route
          path='experiment'
          element={<Experiment />}
        />
        <Route
          loader={Scroll_Indicator_loader}
          path='scroll-indicator'
          element={<Scroll_Indicator />}
        />
        <Route
          path='custom-popup'
          element={<CustomPopUp />}
        />
        <Route
          path='github-finder'
          element={<GithubSearch />}
        />
        <Route
          path='search-autocomplete'
          element={<AutoCompleteSearch />}
        />
        <Route
          path='tic-tac-toe'
          element={<TicTacToe />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>
);
