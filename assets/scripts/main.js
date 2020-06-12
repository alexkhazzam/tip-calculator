const submitForm = document.querySelector(".submit-info");
const percentageInput = document.querySelector(".percent");
const moneyInput = document.querySelector(".money");
const reset = document.querySelector(".reset");
const tipArea = document.querySelector(".tip-area");
const p = document.querySelector("p");

submitForm.addEventListener("click", (event) => {
    event.preventDefault();
    
  const err = () => {
    alert("You entered an invalid value for one or both input fields.");
  };

  if (percentageInput.value.trim() === "" || moneyInput.value.trim() === "") {
    err();
    tipArea.style.border = "2px solid red";
    percentageInput.style.borderBottom = "2px solid red";
    moneyInput.style.borderBottom = "2px solid red";
    setTimeout(() => {
        percentageInput.style.borderBottom = "2px solid black";
        moneyInput.style.borderBottom = "2px solid black";
        tipArea.style.border = "2px solid black";
    }, 1000);
    return;
  }
  submitForm.style.display = "none";
  reset.style.boxShadow = "2px 2px 2px black";

  let tip = `\Tip: $${
    ((percentageInput.value.trim() / 100) * moneyInput.value.trim()).toFixed(2)
  }`;
  p.textContent = tip;
  reset.style.display = "block";
  reset.addEventListener("click", () => {
    reset.style.display = "none";
    submitForm.style.display = "block";
    percentageInput.value = "";
    moneyInput.value = "";
    reset.style.display = "none";
    p.textContent = "Tip: ";
  });
});
