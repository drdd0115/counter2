(() => {
  const $counter = document.getElementById("js-counter");
  const $stepSelect = document.getElementById("step");

  const minCount = 0;
  const maxCount = 100;
  const minusButton = document.querySelector(".minus");
  const plusButton = document.querySelector(".plus");

  let holdTimeout = null;
  let holdInterval = null;

  // ボタン長押し停止処理
  const stopHold = () => {
    clearTimeout(holdTimeout);
    clearInterval(holdInterval);
    holdTimeout = null;
    holdInterval = null;
  }

  // ボタン長押し処理
  const startHold = (action) => {
    action();
    const timeOut = 400;
    const interval = 100;

    holdTimeout = setTimeout(() => {
      holdInterval = setInterval(() => {
        action();
      }, interval);
    }, timeOut);
  }

  // ボタンの状態更新用関数
  // カウントが上限値・下限値になったときボタンを押せなくする
  function updateDisplay() {


    const currentCount = parseInt($counter.textContent);
    const step = parseInt($stepSelect.value);

    minusButton.disabled = currentCount - step < minCount;
    plusButton.disabled = currentCount + step > maxCount;
  }

  // カウント更新
  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    const step = parseInt($stepSelect.value);

    if($targetButton.textContent === "+" && currentCount + step <= maxCount){
      $counter.textContent = currentCount + step;
    }
    else if ($targetButton.textContent === "-" && currentCount - step >= minCount) {
      $counter.textContent = currentCount - step;
    }

    updateDisplay();
  }

  for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
    document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e));
  }



  plusButton.addEventListener("mousedown", (e) => startHold(clickHandler(e)));
  plusButton.addEventListener("mouseup", stopHold);
  plusButton.addEventListener("mouseleave", stopHold);

  minusButton.addEventListener("mousedown", () => startHold(clickHandler(e)));
  minusButton.addEventListener("mouseup", stopHold);
  minusButton.addEventListener("mouseleave", stopHold);

  $stepSelect.addEventListener("change", updateDisplay);
  updateDisplay();

  window.updateCounterDisplay = updateDisplay;

})();