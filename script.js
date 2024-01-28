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


const hey = pro()
  .then((data) => {
	  outpu.innerText = data;
  })
  .catch((err) => {
    console.log(err);
  });