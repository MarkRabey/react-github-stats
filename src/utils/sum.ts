export default (array, key) => array.reduce((acc, r) => acc + r[key], 0);
