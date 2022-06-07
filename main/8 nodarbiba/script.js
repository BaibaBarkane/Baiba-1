function checkZIP() {
  // Pievinot vel 3 valsti
  var constraints = {
    lv: [
      "^(LV-)?\\d{4}$",
      "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007",
    ],
  };

  var country = document.getElementById("Country").value;
  var ZIPField = document.getElementById("ZIP");

  var constraint = new RegExp(constraints[country][0], "");
  console.log(constraint);

  // Parbaude
  if (constraint.test(ZIPField.value)) {
    ZIPField.setCustomValidity("");
  } else {
    // Izvada kļudas paziņojumu
    ZIPField.setCustomValidity(constraints[country][1]);
  }
}

function handleValidity(inputField, errorMsg) {
  if (isValid(inputField)) {
    setFieldValid(inputField);
  } else {
    setFieldInvalid(inputField, errorMsg);
  }
}

function isValid(inputField) {
  return validationRules[inputField.name](inputField.value);
}

function printValues(event) {
  let formInputs = Array.form(userForm.elements);
  // izveidtot tukšu masivu kura saglabam vertibas

  const input = document.getElementsByTagName("input");
  // izmantojot getElementsByTagName('input') dabut visus ievadlaukus

  event.preventDefault();
  let keyValuePairs = [];

  formInputs.forEach((inputField) => {
    if (inputField.tagName !== "BUTTON") {
      let valuePairString = `${inputField.name}: ${inputField.value}`;
      keyValuePairs.push(valuePairString);
    }
  });

  alert(keyValuePairs.join("; "));
}

window.onload = function () {
  document.getElementById("Country").onchange = checkZIP;
  document.getElementById("ZIP").oninput = checkZIP;

  formInputs.forEach((inputField) => {
    if (inputField.tagName !== "BUTTON" && inputField.tagName !== "SELECT") {
      inputField.addEventListener("input", resetErrorState);
      inputField.addEventListener("blur", validateField);
    } else if (inputField.tagName === "SELECT") {
      inputField.addEventListener("change", handlePoValidity);
    }
  });
  userForm.addEventListener("submit", printvalues);
};
