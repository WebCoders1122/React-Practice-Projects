import React from "react";
import FeatureFlagContext from "./FeatureFlagContext";
import FeatureFlagRenderPage from "./FeatureFlagRenderPage";

const FeatureFlag = () => {
  return (
    <FeatureFlagContext>
      <FeatureFlagRenderPage />
    </FeatureFlagContext>
  );
};

export default FeatureFlag;
