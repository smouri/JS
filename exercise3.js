const string = "123456789";
let resultString = "";
for (let i = 0; i < string.length; i += 1) {
  resultString = resultString + string[i] + "b";
  console.log(resultString);
}
console.log(resultString);

for (let i = string.length - 1; i >= 0; i -= 1) {
  resultString += string[i];
  console.log(resultString);
}
console.log(resultString);
