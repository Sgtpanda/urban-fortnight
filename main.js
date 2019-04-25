module.exports = class RomanNumeralGenerator{
  generate(number){
    if (number < 1 || number > 3999){
      throw new RangeError("Unsupported input. Value must be between 1 and 3999")
    }

    let output = "";
    let remainder = number;
    if (number >= 1000){
      let thousands = Math.floor(number / 1000);
      remainder = number - (thousands * 1000);
      output += "M".repeat(thousands);
    }
    if (remainder >= 900){
      remainder -= 900;
      output+= "CM";
    }
    if (remainder >= 500){
      remainder -= 500;
      output+= "D";
    }
    if (remainder >= 400){
      remainder -= 400;
      output+= "CD";
    }
    if (remainder >= 100){
      let hundreds = Math.floor(remainder / 100);
      remainder -= hundreds * 100;
      output+= "C".repeat(hundreds);
    }
    if (remainder >= 90){
      remainder -= 90;
      output+= "XC";
    }
    if (remainder >= 50){
      remainder -= 50;
      output+= "L";
    }
    if (remainder >= 40){
      remainder -= 40;
      output+= "XL";
    }
    if (remainder >= 10){
      let tens = Math.floor(remainder / 10);
      remainder -= tens * 10;
      output+= "X".repeat(tens);
    }
    if (remainder >= 9){
      remainder -= 9;
      output+= "IX";
    }
    if (remainder >= 5){
      remainder -= 5;
      output+= "V";
    }
    if (remainder >= 4){
      remainder -= 4;
      output+= "IV";
    }
    else{
      output+= "I".repeat(remainder);
    }
    return output;
  }
}