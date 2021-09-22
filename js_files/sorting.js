let arr = [];

const fillContainer = () => {
  for (var i = 0; i < 100; i++) {
    arr[i] = Math.floor(Math.random() * 101) + 1;
  }

  var cnt = document.getElementById("arr_cnt");

  while (cnt.firstChild) {
    cnt.removeChild(cnt.firstChild);
  }

  var ht_cnt = 65;
  for (var i = 0; i < 100; i++) {
    var ele = document.createElement("DIV");
    ele.classList.add("bars");
    ele.style.height = `${(arr[i] * ht_cnt) / 100}vh`;
    cnt.appendChild(ele);
  }
};

var fill = document.getElementById("fill");

fill.onclick = fillContainer;
