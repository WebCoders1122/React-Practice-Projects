import React, { useEffect, useState } from "react";
import { createContext } from "react";
import dummyDataAPI from "./dummyData";

export const FeatureContext = createContext(null);
// const FeatureContext = useContext(newContext);

const FeatureFlagContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [componentsToRender, setComponentsToRender] = useState({});

  // fetching dummy data
  const fetchAPIdata = async () => {
    try {
      setLoading(true);
      const res = await dummyDataAPI();
      setComponentsToRender(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };
  useEffect(() => {
    fetchAPIdata();
  }, []);
  return (
    <FeatureContext.Provider value={{ componentsToRender, loading }}>
      {children}
    </FeatureContext.Provider>
  );
};

export default FeatureFlagContext;
