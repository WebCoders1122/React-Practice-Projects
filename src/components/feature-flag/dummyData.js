const dummyData = {
  showgithubSearch: false,
  showCustomTabs: true,
  showQRcode: true,
  showStarRating: false,
  showTreeView: true,
};

const dummyDataAPI = () => {
  return new Promise((resolve, reject) => {
    if (dummyData) {
      setTimeout(resolve(dummyData), 500);
    } else {
      reject("Some Error. Please Try Again");
    }
  });
};

export default dummyDataAPI;
