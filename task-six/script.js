const originalArray = [1, 2, 3, 4, 5];
const array1 = [...originalArray];
const array2 = [...originalArray];
const array3 = [...originalArray];
const array4 = [...originalArray];

array1.splice(1, 2);
array3.splice(3, 0, 'a', 'b', 'c');
array4.splice(1, 0, 'a', 'b');
array4.splice(6, 0, 'c');
array4.splice(8, 0, 'e');

alert(array1);
alert(array2.splice(1, 3));
alert(array3);
alert(array4);
