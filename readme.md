# Custom Array Utils

Custom Array Utils is a collection of custom higher-order functions for working with arrays in JavaScript. These functions provide additional functionality beyond what is available in the standard JavaScript array methods.

## Installation

You can install Array Utils via npm:

```bash
npm install custom-array-utils
```

# Functions

removeDuplicates(array): Removes duplicate elements from an array.

sortByProperty(array, prop): Sorts an array of objects by a specified property.

groupBy(array, criteria): Groups the elements of an array based on a specified criteria.

chunk(array, size): Breaks an array into smaller arrays of a specified size.

shuffle(array): Randomly shuffles the elements of an array.

flatten(array): Flattens a nested array structure.

unique(array): Returns an array of unique elements from the input array.

pluck(array, propertyName): Extracts a list of property values from an array of objects.

partition(array, predicate): Partitions an array into two arrays based on a predicate function.

zip(...arrays): Zips together multiple arrays into a single array of tuples.

# Usage
```bash
const { removeDuplicates, sortByProperty, groupBy, chunk, shuffle, flatten, unique, pluck, partition, zip } = require('array-utils');


// Example usage of removeDuplicates
const array = [1, 2, 3, 3, 4, 5, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Example usage of sortByProperty
const arrayOfObjects = [{ id: 2 }, { id: 1 }, { id: 3 }];
const sortedArray = sortByProperty(arrayOfObjects, 'id');
console.log(sortedArray); // Output: [{ id: 1 }, { id: 2 }, { id: 3 }]

// Example usage of groupBy
const students = [
  { name: 'John', grade: 'A' },
  { name: 'Alice', grade: 'B' },
  { name: 'Bob', grade: 'A' },
  { name: 'Jane', grade: 'C' }
];
const groupedByGrade = groupBy(students, student => student.grade);
console.log(groupedByGrade);
// Output: { A: [{ name: 'John', grade: 'A' }, { name: 'Bob', grade: 'A' }], B: [{ name: 'Alice', grade: 'B' }], C: [{ name: 'Jane', grade: 'C' }] }

// Example usage of chunk
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(numbers, 3);
console.log(chunkedArray); // Output: [[1, 2, 3], [4, 5, 6], [7, 8]]


// Example usage of shuffle
const shuffledNumbers = shuffle(numbers);
console.log(shuffledNumbers); // Output: Randomly shuffled array


// Example usage of flatten
const nestedArray = [1, [2, [3, [4]]]];
const flattenedArray = flatten(nestedArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4]

// Example usage of unique
const arrayWithDuplicates = [1, 2, 3, 3, 4, 5, 5];
const uniqueElements = unique(arrayWithDuplicates);
console.log(uniqueElements); // Output: [1, 2, 3, 4, 5]


// Example usage of pluck
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }];
const names = pluck(users, 'name');
console.log(names); // Output: ['John', 'Alice', 'Bob']

// Example usage of partition
const numbersToPartition = [1, 2, 3, 4, 5];
const [evenNumbers, oddNumbers] = partition(numbersToPartition, num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
console.log(oddNumbers); // Output: [1, 3, 5]

// Example usage of zip
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const zippedArray = zip(array1, array2);
console.log(zippedArray); // Output: [['a', 1], ['b', 2], ['c', 3]]
```

# License

This project is licensed under the ISC License.