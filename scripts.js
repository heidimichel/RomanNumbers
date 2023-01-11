const getValueInput = () => {
  let inputValue = document.getElementById("roman").value;
  let upperValue = inputValue.toUpperCase();
  switch (upperValue) {
    case "TEST":
      text = "passed the test";
      break;
    case "I":
      text = "1";
      break;
    case "II":
      text = "2";
      break;
    case "III":
      text = "3";
      break;
    case "IV":
      text = "4";
      break;
    case "V":
      text = "5";
      break;
    case "VI":  
      text = "6";
      break;
    case "VII":  
      text = "7";
      break;
    case "VIII":  
      text = "8";
    break;
    case "IX":  
      text = "9";
      break;
    case "X":
      text = "10";
      break;
    case "XX":
      text = "20";
      break;
    case "XXX":
      text = "30";
      break;
    case "L":
      text = "50";
      break;
    case "C":
      text = "100";
      break;
    case "CC":
      text = "200";
      break;
    case "CCC":
      text = "300";
      break;
    case "D":
      text = "500";
      break;
    case "M":
      text = "1000";
      break;
    case "MM":
      text = "2000";
      break;
    default:
      text = "Not a valid roman number";
  }
    document.getElementById("result").innerHTML = text;
    console.log("It's working!");
  };