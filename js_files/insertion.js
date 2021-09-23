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
    var key = childDivs[i];
    childDivs[i].style.background = "blue";
    var j = i - 1;
    var transform1 = childDivs[i].offsetHeight;
    var ht = window.getComputedStyle(childDivs[i]).getPropertyValue("height");
    while (j >= 0 && childDivs[j].offsetHeight > transform1) {
      childDivs[j].style.background = "red";
      childDivs[j + 1].style.height = window
        .getComputedStyle(childDivs[j])
        .getPropertyValue("height");
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );
      childDivs[j].style.background = "yellow";
      j = j - 1;
    }
    childDivs[j + 1].style.height = ht;
    childDivs[i].style.background = "yellow";
  }
}

var btn = document.getElementById("insertion");

btn.onclick = handleSort;
