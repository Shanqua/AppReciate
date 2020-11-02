
export const fetchAllFeatures=()=> {
  // in reality, this would have been a `fetch` call:
  // `fetch("/api/features/all")`
  return new Promise((resolve) => {
    const features = {
      featureFoo: true,
      extendedSummary: true,
    };

    setTimeout(resolve, 10, features);
  })
  .then(function(features) {
  console.log(features); // "Success"
});
};

export default fetchAllFeatures;
