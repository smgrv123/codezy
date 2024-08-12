export const defaultValue = `
/**
 * Binary search function to find an object in a sorted array.
 * @param {Array} arr - The sorted array of objects to search through.
 * @param {string} key - The key of the object property to compare.
 * @param {any} value - The value to search for.
 * @returns {Object|null} - The found object or null if not found.
 */
function binarySearch(arr, key, value) {
    // Initialize the start and end indices
    let start = 0;
    let end = arr.length - 1;

    // Loop until the start index is greater than the end index
    while (start <= end) {
        // Calculate the middle index
        let mid = Math.floor((start + end) / 2);

        // Compare the middle element's key value with the target value
        if (arr[mid][key] === value) {
            // If the middle element matches the target value, return the object
            return arr[mid];
        } else if (arr[mid][key] < value) {
            // If the middle element is less than the target value, search the right half
            start = mid + 1;
        } else {
            // If the middle element is greater than the target value, search the left half
            end = mid - 1;
        }
    }

    // If the element is not found, return null
    return null;
}

// Example usage:
const objectsArray = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
];

// Searching for an object with id 3
const result = binarySearch(objectsArray, 'id', 3);
console.log(result); // Output: { id: 3, name: 'Charlie' }

// Searching for an object with id 6 (not in the array)
const resultNotFound = binarySearch(objectsArray, 'id', 6);
console.log(resultNotFound); // Output: null
`;
