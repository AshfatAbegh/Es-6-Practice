const ages = [12,13,14,16,];
const ages2 = [45,32,52,96];
const ages3 = [45,26,78,43];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);
const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250, 850];
const maximum = Math.max(...takaPoisa);
// const maximum = Math.max(business, minister, sochib);
console.log(maximum);