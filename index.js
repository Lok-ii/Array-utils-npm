// 1. removeDuplicates: Removes duplicate elements from an array.
function removeDuplicates(array) {
    return Array.from(new Set(array));
  }
  
  // 2. sortByProperty: Sorts an array of objects by a specified property.
  function sortByProperty(array, prop) {
    return array.sort((a, b) => a[prop] - b[prop]);
  }
  
  // 3. groupBy: Groups the elements of an array based on a specified criteria.
  function groupBy(array, criteria) {
    return array.reduce((acc, currentValue) => {
      const key = criteria(currentValue);
      (acc[key] = acc[key] || []).push(currentValue);
      return acc;
    }, {});
  }
  
  // 4. chunk: Breaks an array into smaller arrays of a specified size.
  function chunk(array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  }
  
  // 5. shuffle: Randomly shuffles the elements of an array.
  function shuffle(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }
  
  // 6. flatten: Flattens a nested array structure.
  function flatten(array) {
    return array.reduce((acc, currentValue) => acc.concat(Array.isArray(currentValue) ? flatten(currentValue) : currentValue), []);
  }
  
  // 7. unique: Returns an array of unique elements from the input array.
  function unique(array) {
    return [...new Set(array)];
  }
  
  // 8. pluck: Extracts a list of property values from an array of objects.
  function pluck(array, propertyName) {
    return array.map(item => item[propertyName]);
  }
  
  // 9. partition: Partitions an array into two arrays based on a predicate function.
  function partition(array, predicate) {
    return array.reduce((acc, currentValue) => {
      acc[predicate(currentValue) ? 0 : 1].push(currentValue);
      return acc;
    }, [[], []]);
  }
  
  // 10. zip: Zips together multiple arrays into a single array of tuples.
  function zip(...arrays) {
    const maxLength = Math.max(...arrays.map(arr => arr.length));
    return Array.from({ length: maxLength }, (_, index) => arrays.map(array => array[index]));
  }
  
  // Export them if needed
  module.exports = { removeDuplicates, sortByProperty, groupBy, chunk, shuffle, flatten, unique, pluck, partition, zip };
  