/**
 * formats URI component
 * @param {string} str
 * @returns {string}
 */

export const formatUriComponent = (str) => {
  return encodeURIComponent(str.toLowerCase().split(" ").join("-"));
};

/**
 * Parses query string
 * @param {string} queryString
 * @returns {object}
 */

export const parseQueryString = (queryString) => {
  if (queryString.trim() === "") return { genre: "", genreId: "", id: "" };
  return queryString
    .trim()
    .slice(1)
    .split("&")
    .reduce((parsedQueryStringObject, parameterValuePair) => {
      const [parameter, value] = parameterValuePair.split("=");
      parsedQueryStringObject[parameter] = value;
      return parsedQueryStringObject;
    }, {});
};

/**
 * Replace & char with and in str 
 * @param {string} str 
 * @returns {string}
 */
export const formatGenre = (str) => {
  return str.replace("&", "and");
};
