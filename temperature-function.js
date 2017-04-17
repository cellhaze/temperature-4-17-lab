function convertTemp(temp,unit) {
  if ( unit === "C") {
  console.log((temp * 9/5) + 32);
}else{
  console.log(temp-32) * 5/9;
  }
}
convertTemp(50,"C");

// (C × 9/5) + 32 = F;
// (F − 32) x 5/9 = C;