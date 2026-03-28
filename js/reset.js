(() => {
    const $counter = document.getElementById("js-counter");
    const minusButton = document.querySelector(".minus");
    const plusButton = document.querySelector(".plus");

    const clickHandler = () => {
      $counter.textContent = 0;
      window.updateCounterDisplay();
    };

    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
  }
)();