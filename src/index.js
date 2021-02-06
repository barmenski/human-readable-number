module.exports = function toReadable (number) {
   
    let str=""+number;
    let result="";
    
    let a=str[str.length-1]; //первый разряд
    let b=str[str.length-2]; //второй разряд
    let c=str[str.length-3]; //третий разряд
    if((a==='0')&&(b==undefined)&&(c==undefined)){
      return "zero";
    }
    
    switch (a){
      case "1":
        if((b==="1")){
          result=result+"eleven"
        } else result=result+"one";
        break;
      case "2":
        if((b==="1")){
          result=result+"twelve"
        } else result=result+"two";
        break;
      case "3":
        if((b==="1")){
          result=result+"thirteen"
        } else result=result+"three";
        break;
      case "4":
        if((b==="1")){
          result=result+"fourteen"
        } else result=result+"four";
        break;
      case "5":
        if((b==="1")){
          result=result+"fifteen"
        } else result=result+"five";
        break;
      case "6":
        if((b==="1")){
          result=result+"sixteen"
        } else result=result+"six";
        break;
      case "7":
        if((b==="1")){
          result=result+"seventeen"
        } else result=result+"seven";
        break;
      case "8":
        if((b==="1")){
          result=result+"eighteen"
        } else result=result+"eight";
        break;
      case "9":
        if((b==="1")){
          result=result+"nineteen"
        } else result=result+"nine";
        break;
      case "0":
        if((b==="1")){
          result=result+"ten"
        } else break;
      default:
      break;
    }
  
    if((b!="1")&&(a)&&(b!=undefined)&&(b!=0)){
     
      switch (b){
        case "0":
          break;
        case "2":
          if(a==="0"){
          result="twenty"
          } else {
            result="twenty"+" "+result; 
          }
          break;
        case "3":
          if(a==="0"){
          result="thirty";
          } else {
          result="thirty"+" "+result;
          }
          break;
        case "4":
          if(a==="0"){
          result="forty";
          } else {
          result="forty"+" "+result;
          }
          break;
        case "5":
          if(a==="0"){
          result="fifty";
          } else {
          result="fifty"+" "+result;
          }
          break;
        case "6":
          if(a==="0"){
          result="sixty";
          } else {
          result="sixty"+" "+result;
          }
          break;
        case "7":
          if(a==="0"){
          result="seventy";
          } else {
          result="seventy"+" "+result;
          }
          break;
        case "8":
          if(a==="0"){
          result="eighty";
          } else {
          result="eighty"+" "+result;
          }
          break;
        case "9":
          if(a==="0"){
          result="ninety";
        } else {
          result="ninety"+" "+result;
        }
          break;
  
        default:
          break;
      }
    } 
  
    if (c) {
     
      switch (c){
        case "1":
            if((b==="0")&(a==="0")){
              result="one hundred";
            } else {
              result="one hundred "+result;
            }
          break;
        case "2":
            if((b==="0")&(a==="0")){
              result="two hundred";
            } else {
              result="two hundred "+result;  
            }
          break;
        case "3":
            if((b==="0")&(a==="0")){
                result="three hundred";
              } else {
                result="three hundred "+result;  
              }
          break;
        case "4":
            if((b==="0")&(a==="0")){
                result="four hundred";
              } else {
                result="four hundred "+result;  
              }
          break;
        case "5":
            if((b==="0")&(a==="0")){
                result="five hundred";
              } else {
                result="five hundred "+result;  
              }
          break;
        case "6":
            if((b==="0")&(a==="0")){
                result="six hundred";
              } else {
                result="six hundred "+result;  
              }
          break;
        case "7":
            if((b==="0")&(a==="0")){
                result="seven hundred";
              } else {
                result="seven hundred "+result;  
              }
          break;
        case "8":
            if((b==="0")&(a==="0")){
                result="eight hundred";
              } else {
                result="eight hundred "+result;  
              }
          break;
        case "9":
            if((b==="0")&(a==="0")){
                result="nine hundred";
              } else {
                result="nine hundred "+result;  
              }
          break;
        case "0":
          break;
        default:
        break;
      }
    } 
  
    return result;
}
