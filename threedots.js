
const ages = [12,14,13,15,17];
const ages2 = [14,16,18];
const ages3 = [22,25,23]

const totalAges = ages.concat(ages2).concat(5).concat(ages3);
const totalAges2 = [...ages,...ages2,5,...ages3]

// console.log(totalAges2);

const b = 650;
const m = 450;
const s = 500;
const takaPoysa = [500,650,634,990]
//const maximum = Math.max(b,m,s);
const maximum = Math.max(...takaPoysa);
console.log(maximum);