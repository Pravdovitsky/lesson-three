const originalArray = [1, 2, 3];
const pushArray = [...originalArray];
const unshiftArray = [...originalArray];

pushArray.push(4, 5, 6);
unshiftArray.unshift(4, 5, 6);

alert(`Push: ${pushArray}`);
alert(`Unshift: ${unshiftArray}`);
