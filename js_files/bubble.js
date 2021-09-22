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
    for (var j = 0; j < 100 - i - 1; j++) {
      const transform1 = childDivs[j].offsetHeight;
      const transform2 = childDivs[j + 1].offsetHeight;

      childDivs[j].style.background = "red";
      childDivs[j + 1].style.background = "red";
      if (transform1 > transform2) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve(), delay(2);
          })
        );
        swap(childDivs[j], childDivs[j + 1]);
      }
      childDivs[j].style.background = "yellow";
      childDivs[j + 1].style.background = "yellow";
    }
    childDivs[100 - i - 1].style.background = "green";
  }
}

var btn = document.getElementById("bubble");

btn.onclick = handleSort;
