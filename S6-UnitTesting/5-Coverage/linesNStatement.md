function processNumbers(a, b) {
  let result = a + b; 
  if (result > 10) { 
    result = result * 2; return result;             // 1 line 2 statement 
  } else {  
    result = (a * b) +                             /* 2 Line 1 statement */
    (a - b);
  }
  return result; 
}
