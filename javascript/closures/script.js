function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall >= delay) {
      lastcall = now;
      fn.apply(this, args);
    }
  };
}

const fetchUser = new Promise((resolve) => {
  setTimeout(() => resolve({ id: 1, name: "Lokesh" }), 2000);
});

const fetchMovies = new Promise((resolve, reject) => {
  setTimeout(
    () =>
      Math.random() < 0.5
        ? resolve(["A man called otto", "Hindi medium", "Queen"])
        : reject("Something went wrong while fetching the movies"),
    5000
  );
});

// Promise.all([fetchMovies, fetchUser])
//   .then(([data1, data2]) => console.log(data1, data2))
//   .catch((error) => console.log(error));

// Promise.race([fetchMovies, fetchUser])
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

Promise.allSettled([fetchMovies, fetchUser]).then((results) => {
  console.log(results);
});
