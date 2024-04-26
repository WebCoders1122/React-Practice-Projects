import React, { useContext } from "react";
import FeatureFlagContext, { FeatureContext } from "./FeatureFlagContext";

//components imports
import GithubSearch from "../Github-Search/GithubSearch";
import CustomTabs from "../custom-tabs/CustomTabs";
import QR_Code from "../QR Code/QRCode";
import StarRating from "../Star_Rating/StarRating";
import TreeView from "../tree-view/TreeView";

const FeatureFlagRenderPage = () => {
  const { componentsToRender, loading } = useContext(FeatureContext);
  const components = [
    {
      key: "showgithubSearch",
      component: <GithubSearch />,
    },
    {
      key: "showCustomTabs",
      component: <CustomTabs />,
    },
    {
      key: "showQRcode",
      component: <QR_Code />,
    },
    {
      key: "showStarRating",
      component: <StarRating />,
    },
    {
      key: "showTreeView",
      component: <TreeView />,
    },
  ];

  return (
    <div>
      {components &&
        components.map((item) => {
          return componentsToRender[item.key] ? item.component : null;
        })}
    </div>
  );
};

export default FeatureFlagRenderPage;
