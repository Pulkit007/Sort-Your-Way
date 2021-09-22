function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
}

async function handleSort() {
  var childDivs = document
    .getElementById("arr_cnt")
    .getElementsByTagName("div");

  for (var i = 0; i < 100; i++) {
    var min_idx = i;
    var transform1 = childDivs[i].offsetHeight;
    for (var j = i + 1; j < 100; j++) {
      var transform2 = childDivs[j].offsetHeight;

      childDivs[i].style.background = "red";
      childDivs[j].style.background = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );
      if (transform1 > transform2) {
        min_idx = j;
        transform1 = transform2;
      }
      childDivs[i].style.background = "yellow";
      childDivs[j].style.background = "yellow";
    }
    swap(childDivs[i], childDivs[min_idx]);
    childDivs[i].style.background = "green";
  }
}

var btn = document.getElementById("selection");

btn.onclick = handleSort;
