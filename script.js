//your JS code here. If required.
const outpu = document.getElementById("output");

function pro() {
  return new Promise((res, rej) => {
    if (true) {
      setTimeout(() => {
        res("Hello, world!");
      }, 1000);
    }
  });
}

