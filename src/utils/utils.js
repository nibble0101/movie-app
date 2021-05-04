/**
 * formats URI component 
 * @param {string} str 
 * @returns {string}
 */

export const formatUriComponent = (str) => {
  return encodeURIComponent(str.toLowerCase().split(" ").join("-"));
};
