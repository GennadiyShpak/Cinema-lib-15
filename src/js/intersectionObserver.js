const options = {
  rootMargin: "150px",
  // threshold: 0.1,
};

function onEntry(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting && imgApiService.query !== "") {
    }
  });
}

const Observer = new IntersectionObserver(onEntry, options);

export { Observer };
