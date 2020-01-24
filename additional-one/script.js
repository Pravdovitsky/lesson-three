const array1 = [1, 2, 3,];
const array2 = ['a', 'b', 'c',];

array1.forEach((item) => array2.push('' + item));

alert(array2);
