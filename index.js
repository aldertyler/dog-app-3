"use strict";

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  if (responseJson.status !== "success") {
    alert("Hmmm. Cannot find that breed of dog. Try again.");
  } else {
    $(".results-img").replaceWith(
      `<img src="${responseJson.message}" class="results-img">`
    );
    $(".results").removeClass("hidden");
  }
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    let breed = $("#breed").val();
    getDogImage(breed);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
