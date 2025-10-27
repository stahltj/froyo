function getFlavors() {
  let flavors = prompt("please enter flavors here");
  console.log(flavors);
  const arrayOfFlavors = flavors.split(",");

  return arrayOfFlavors;
}

function tallyFlavors(arrayOfFlavors) {
  let flavorCounts = {};
  arrayOfFlavors.forEach((flavor) => {
    if (flavor.trim().toLowerCase().length > 0) {
      if (flavorCounts[flavor.trim().toLowerCase()]) {
        flavorCounts[flavor.trim().toLowerCase()] += 1;
      } else {
        flavorCounts[flavor.trim().toLowerCase()] = 1;
      }
    }
  });
  return flavorCounts;
}
let arrayOfFlavors = getFlavors();
console.log(arrayOfFlavors);
let flavorCounts = tallyFlavors(arrayOfFlavors);
console.log(flavorCounts);
