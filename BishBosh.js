function Calculate(num, bish, bosh) {
  let boolBish = false;
  let boolBosh = false;
  let boolBishBosh = false;
  strTextValue = num;
  if (num % bosh === 0) {
    boolBosh = true;
    strTextValue = "Bosh";
  }
  if (num % bish === 0) {
    boolBish = true;
    strTextValue = "Bish";
  }
  if (boolBish === true && boolBosh === true) {
    strTextValue = "Bish-Bosh";
  }
  return strTextValue;
}
function Start(loop, bish, bosh) {
  if (loop === "" || bish === "" || bosh === "") {
    text = "Please enter some input in all the fields.";
    document.getElementById("result").innerHTML = text;
  } else {
    if (isNaN(loop) || isNaN(bish) || isNaN(bosh)) {
      text = "Input not valid, must be a number.";
      document.getElementById("result").innerHTML = text;
    } else {
      if (loop < 0 || bish < 0 || bosh < 0) {
        text = "Input not valid, must be a positive number.";
        document.getElementById("result").innerHTML = text;
      } else {
        let loopArray = [loop];
        for (let i = 0; i < loop; i++) {
          loopArray[i] = Calculate(i + 1, bish, bosh);
        }
        WriteArray(loopArray);
      }
    }
  }
}
function WriteArray(nrs) {
  document.getElementById("result").innerHTML = " ";
  for (let i = 0; i < nrs.length; i++) {
    document.getElementById("result").innerHTML += nrs[i] + ", ";
  }
}
