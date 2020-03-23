// Selectors
const selectorLink = document.querySelector(".open-form");
const selectorModalSection = document.querySelector(".modal");
const selectorForm = selectorModalSection.querySelector(".modal-form");

// Form Data
const checkInDate = selectorForm.querySelector("input[name=check-in-date]");
const checkOutDate = selectorForm.querySelector("input[name=check-out-date]");
const adults = selectorForm.querySelector("input[name=adults]");
const children = selectorForm.querySelector("input[name=children]");

// Get data from the localStorage
let storageCheckInDate = localStorage.getItem("checkInDate");
let storageCheckOutDate = localStorage.getItem("checkOutDate");
let storageAdults = localStorage.getItem("adults");
let storageChildren = localStorage.getItem("children");

// Close modal form after the script is loaded
window.onload = function() {
  if (!selectorModalSection.classList.contains("modal-hide")) {
    selectorModalSection.classList.add("modal-hide");
  }
};

// Process clicking on the Search Button
selectorLink.addEventListener("click", function(event) {
  event.preventDefault();

  selectorModalSection.classList.toggle("modal-hide");
  selectorModalSection.classList.remove("modal-validation-error");
  checkInDate.focus();

  if (storageCheckInDate) {
    checkInDate.value = storageCheckInDate;
    checkOutDate.focus();
  } else if (storageCheckInDate && storageCheckOutDate) {
    checkInDate.value = storageCheckInDate;
    checkOutDate.value = storageCheckOutDate;
    adults.focus()
  } else if (storageCheckInDate && storageCheckOutDate && storageAdults) {
    checkInDate.value = storageCheckInDate;
    checkOutDate.value = storageCheckOutDate;
    adults.value = storageAdults;
    children.focus()
  } else if (!storageCheckInDate) {
    checkOutDate.value = storageCheckOutDate;
    adults.value = storageAdults;
    children.value = storageChildren;
    checkInDate.focus()
  }
});

// Imitation of sending/error
selectorForm.addEventListener("submit", function(event) {
  if (checkInDate.value && checkOutDate.value) {
    // console.log('first');
    localStorage.clear();
    localStorage.setItem("checkInDate", checkInDate.value);
    localStorage.setItem("checkOutDate", checkOutDate.value);
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value)
  } else {
    // console.log('second');
    event.preventDefault();
    selectorModalSection.classList.remove("modal-validation-error");
    selectorModalSection.offsetWidth = selectorModalSection.offsetWidth;
    selectorModalSection.classList.add("modal-validation-error");
  }
  //console.log('submit...')
});
