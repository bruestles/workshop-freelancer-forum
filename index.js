/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100; // original: 100

// 1. Write a function that returns a freelancer object with a randomly generated name,
// occupation, and rate according to the provided constants.
function getFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const rate =
    Math.round(
      Math.random() *
        (PRICE_RANGE.max - PRICE_RANGE.min + PRICE_RANGE.min) *
        100,
    ) / 100;
  return { name, occupation, rate };
}
// const testing = getFreelancer();
// console.log(getFreelancer());

// 2. Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
const freelancers = Array.from({ length: NUM_FREELANCERS }, getFreelancer);
// console.log(freelancers);

// 3. Write a function that returns the average rate of all freelancers in state.
function getAverageRate() {
  const sumOfRates = freelancers.reduce((accumulator, freelancer) => {
    return accumulator + freelancer.rate;
  }, 0);
  return sumOfRates / NUM_FREELANCERS;
}
// console.log(getAverageRate());

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.
const averageRate = getAverageRate();
const oneFreelancer = getFreelancer();

// 5. Write a component function to represent a single freelancer.
function FreelancerAd() {
  const { name, occupation, rate } = oneFreelancer;
  const $ad = document.createElement("ul");
  $ad.classList.add("freelancer");
  $ad.innerHTML = `
  <li>${name}</li>
  <li>${occupation}</li>
  <li>${rate}</li>
  `;
  return $ad;
}

// 6. Write a component function to represent an array of freelancers.
function FreelancerAds() {
  const $ads = document.createElement("article");
  $ads.classList.add("freelancer");

  const $adsInfo = $adsInfo.compareDocumentPosition(FreelancerAd);
  $ads.replaceChildren(...$adsInfo);

  return $ads;
}

// 7. Write a component function to represent the average rate of all freelancers.
function averageRateOfFreelancers() {
  // There's already a const variable for averageRate
  const $averageRate = document.createElement("p");
  $averageRate.classList.add("averageRate");
  $averageRate.innerHTML = `${averageRate}`;
  return $averageRate;
}

// 8. Write and call a render function that will mount the application onto the document.
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <FreelancerAds></FreelancerAds>
  `;
  $app.querySelector("FreelancerAds").replaceWith(FreelancerAds);
}
render();
