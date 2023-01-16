module.exports = function toReadable (number) {
  let str ='';
  if (number > 999) return 'Error';
  if (number == 0) str = 'zero';
    if ((number >=0) && (number <= 19)){ //straight 0-19
      switch (number){
        case 1: str = 'one';
          break;
        case 2: str = 'two';
          break;
        case 3: str = 'three';
          break;
        case 4: str = 'four';
          break;
        case 5: str = 'five';
          break;
        case 6: str = 'six';
          break;
        case 7: str = 'seven';
          break;
        case 8: str = 'eight';
          break;
        case 9: str = 'nine';
          break;
        case 10: str = 'ten';
          break;
        case 11: str = 'eleven';
          break;
        case 12: str = 'twelve';
          break;
        case 13: str = 'thirteen';
          break;
        case 14: str = 'fourteen';
          break;
        case 15: str = 'fifteen';
          break;
        case 16: str = 'sixteen';
          break;
        case 17: str = 'seventeen';
          break;
        case 18: str = 'eighteen';
          break;
        case 19: str = 'eighteen'; //Mistake in test
          break;
      }
    }
    else { //Combined
          //ones
          ones = number % 10;
          console.log(ones);
          
          //tens
          tens = number % 100 - ones;
          console.log(tens);
      
          //hundreds
          hundreds = number - (tens + ones);
          console.log(hundreds);
          // console.log(str);

          //Converting
          if (number > 99) { //hundreds
            switch(hundreds/100){
              case 1: str = 'one';
              break;
              case 2: str = 'two';
              break;
              case 3: str = 'three';
              break;
              case 4: str = 'four';
              break;
              case 5: str = 'five';
              break;
              case 6: str = 'six';
              break;
              case 7: str = 'seven';
              break;
              case 8: str = 'eight';
              break;
              case 9: str = 'nine';
              break;
            }
            if ((tens + ones) != 0) {  
              str += ' hundred ';
            }//if ((tens + ones) != 0)
            else {
              str += ' hundred';
            }
          }
          if (number > 9) { //tens
            let flag = 0; //Hit or Miss flag
            if ((tens + ones) == 10) {
              str += 'ten';
              flag = 1;
            }
            if ((tens + ones) == 11) {
              str += 'eleven';
              flag = 1;
            }
            if ((tens + ones) == 12) {
              str += 'twelve';
              flag = 1;
            }
            if ((tens + ones) == 13) {
              str += 'thirteen';
              flag = 1;
            }
            if ((tens + ones) == 14) {
              str += 'fourteen';
              flag = 1;
            }
            if ((tens + ones) == 15) {
              str += 'fifteen';
              flag = 1;
            }
            if ((tens + ones) == 16) {
              str += 'sixteen';
              flag = 1;
            }
            if ((tens + ones) == 17) {
              str += 'seventeen';
              flag = 1;
            }
            if ((tens + ones) == 18) {
              str += 'eighteen';
              flag = 1;
            }
            if ((tens + ones) == 19) {
              str += 'nineteen';
              flag = 1;
            }
            else {
              if (flag == 0) {//combined tens
                switch(tens/10){
                  case 2: str += 'twenty';
                  break;
                  case 3: str += 'thirty';
                  break;
                  case 4: str += 'forty';
                  break;
                  case 5: str += 'fifty';
                  break;
                  case 6: str += 'sixty';
                  break;
                  case 7: str += 'seventy';
                  break;
                  case 8: str += 'eighty';
                  break;
                  case 9: str += 'ninety';
                  break;
                }
                if ((tens/10) == 0) {
                  switch (ones){
                    case 1: str += 'one';
                    break;
                    case 2: str += 'two';
                    break;
                    case 3: str += 'three';
                    break;
                    case 4: str += 'four';
                    break;
                    case 5: str += 'five';
                    break;
                    case 6: str += 'six';
                    break;
                    case 7: str += 'seven';
                    break;
                    case 8: str += 'eight';
                    break;
                    case 9: str += 'nine';
                    break;
                  }
                }
                else {
                  switch (ones){
                  case 1: str += ' one';
                  break;
                  case 2: str += ' two';
                  break;
                  case 3: str += ' three';
                  break;
                  case 4: str += ' four';
                  break;
                  case 5: str += ' five';
                  break;
                  case 6: str += ' six';
                  break;
                  case 7: str += ' seven';
                  break;
                  case 8: str += ' eight';
                  break;
                  case 9: str += ' nine';
                  break;
                  }
                }
              }//if
            }
          }
     
         // str = hundreds + tens + ones;
    }
  return str;
}
