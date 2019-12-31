//accepts css selector as string

const form = document.querySelector("form");

//listen for an event
//use a call back function when event occurs

form.addEventListener("submit", function(event) {
  event.preventDefault();
  console.log("I am submitted");
});
console.log(form);
