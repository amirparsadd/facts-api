/**
 * Returns a random item from the array
 * 
 * @param {Array} arr 
 * @returns a random item from the array
 */
export function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}