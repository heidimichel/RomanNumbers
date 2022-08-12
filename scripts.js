const getValueInput = () => {
  let inputValue = document.getElementById("roman").value;
  switch (inputValue) {
    case "test":
      text = "passed the test";
      break;
    case "I":
      text = "1";
      break;
    case "V":
      text = "5";
      break;
    case "X":
      text = "10";
      break;
    case "L":
      text = "50";
      break;
    case "C":
      text = "100";
      break;
    case "D":
      text = "500";
      break;
    case "M":
      text = "1000";
      break;
    case "II":
      text = "2";
      break;
    default:
      text = "Not a valid roman number";
  }
    document.getElementById("result").innerHTML = text;
    console.log("It's working!");
  };