

//Your online store likes to give out coupons for special occasions. 
//Some customers try to cheat the system by entering invalid codes or using expired coupons.
//Your mission: 
//Write a function called checkCoupon to verify that a coupon is valid and not expired.
//If the coupon is good, return true. Otherwise, return false.
//A coupon expires at the END of the expiration date. 
//All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // check if coupon is valid
        if (enteredCode === correctCode){
          //parse date from string to comparable representation 
          let convertedCurrentDate = Date.parse(currentDate);
          let convertedExpirationDate = Date.parse(expirationDate);
          //if it is valid check expiration date 
          if (convertedExpirationDate >= convertedCurrentDate ){
          //return true 
            return true
          } else {
            return false
          }
        } else {
          //else return false 
            return false;
        }
}
