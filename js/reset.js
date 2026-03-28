(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
      $counter.textContent = 0;
      window.updateCounterDisplay();
    };

    document.getElementById("js-reset-button").addEventListener("click", clickHandler);
  }
)();