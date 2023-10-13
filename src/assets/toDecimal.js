const convertToDecimal = (num) => {
  let convertedNumber = 0;
  if (num?.toString().length == 3) {
    convertedNumber = String(num)[0] + "." + String(num)[1] + String(num)[2];
  } else {
    convertedNumber =
      String(num)[0] + String(num)[1] + "." + String(num)[2] + String(num)[3];
  }
  return convertedNumber;
};
export default convertToDecimal;
