function getFlavors() {
  let flavors = prompt("please enter flavors here");
  console.log(flavors);
  const arrayOfFlavors = flavors.split(",");

  return arrayOfFlavors;
}

function tallyFlavors(arrayOfFlavors) {
  let flavorCounts = {};
  arrayOfFlavors.forEach((flavor) => {
    // maskes sure theres not an empty value for flavor
    if (flavor.trim().toLowerCase().length > 0) {
      // Check if the current 'flavor' is already a key in flavorCounts
      if (flavorCounts[flavor.trim().toLowerCase()]) {
        // If the key exists, increment its current count by 1
        flavorCounts[flavor.trim().toLowerCase()] += 1;
      } else {
        // If the key does not exist, initialize it with a count of 1
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
