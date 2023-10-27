let b1 = document.querySelector(".box1");
let b1a = new Audio("simonSound1.mp3");
let b2 = document.querySelector(".box2");
let b2a = new Audio("simonSound2.mp3");
let b3 = document.querySelector(".box3");
let b3a = new Audio("simonSound3.mp3");
let b4 = document.querySelector(".box4");
let b4a = new Audio("simonSound4.mp3");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");

let stat = true;
let cl = 1;
let ans = [];
let que = [];

body.addEventListener("keydown", function (e) {
  if (e.code === "KeyA") {
    que.push(1);
    b1a.play();
  } else if (e.code === "KeyS") {
    que.push(2);
    b2a.play();
  } else if (e.code === "KeyD") {
    que.push(3);
    b3a.play();
  } else if (e.code === "KeyF") {
    que.push(4);
    b4a.play();
  }
});
b1.addEventListener("click", function () {
  que.push(1);
  b1a.play();
});
b2.addEventListener("click", function () {
  que.push(2);
  b2a.play();
});
b3.addEventListener("click", function () {
  que.push(3);
  b3a.play();
});
b4.addEventListener("click", function () {
  que.push(4);
  b4a.play();
});

function flashbutton(num) {
  if (num === 1) {
    b1.classList.add("flash");
    setTimeout(function () {
      b1.classList.remove("flash");
      b1a.play();
    }, 300);
  } else if (num === 2) {
    b2.classList.add("flash");
    setTimeout(function () {
      b2.classList.remove("flash");
      b2a.play();
    }, 300);
  } else if (num === 3) {
    b3.classList.add("flash");
    setTimeout(function () {
      b3.classList.remove("flash");
      b3a.play();
    }, 300);
  } else {
    b4.classList.add("flash");
    setTimeout(function () {
      b4.classList.remove("flash");
      b4a.play();
    }, 300);
  }
}

function flashans(ans) {
  for (let i = 0; i < ans.length; i++) {
    setTimeout(function () {
      flashbutton(ans[i]);
    }, 1000 * (i + 1));
  }
}

let an = Math.floor(4 * Math.random());
if (an === 0) {
  an = 1;
}
ans.push(an);
flashans(ans);
let further = document.createElement("h2");
further.innerHTML = `The order is correct!! Keep going <br />  &nbsp;&nbsp;&nbsp;&nbsp;Current level=${cl}`;

body.addEventListener("keydown", function (ev) {
  if (cl === 1 && (ev.code === "Enter" || ev.code === "NumpadEnter")) {
    let h3 = document.querySelector("h3");
    h3.remove();
    top1 = document.querySelector(".top1");
    body.insertBefore(further, top1);
  }
  if (ev.code === "Enter" || ev.code === "NumpadEnter") {
    if (JSON.stringify(que) == JSON.stringify(ans)) {
      que = [];
      let an = Math.ceil(4 * Math.random());
      if (an === 0) {
        an = 1;
      }
      ans.push(an);
      flashans(ans);
      cl++;
      further.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspThe order is correct!! Keep going <br />  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspCurrent level=${cl}`;
    } else {
      further.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspBetter Luck Next time <br /> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Reload the page to start the game again`;
      ans = [];
      que = [];
      console.log("blnt");
    }
  }
});
