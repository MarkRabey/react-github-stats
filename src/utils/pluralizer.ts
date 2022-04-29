export default (number: number, string: string) => {
  let newString = string.slice();
  if (number === 0 || number > 1) {
    newString = `${string}s`;
  }
  return newString;
};
