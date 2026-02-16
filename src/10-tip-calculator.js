/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  let tipP=0;
  let tip=0;
  let totalBill=0;

  if(billAmount<=0){
    return null;
  }
  if(serviceRating<=0 || serviceRating>5){
    return null;
  }
  
  if(!Number.isInteger(serviceRating)){
    return null;
  }

  if(serviceRating==1){
        tipP=5;
        tip=billAmount*0.05;
        totalBill=billAmount+tip;

      return {tipPercentage:tipP,tipAmount:tip,totalAmount:totalBill};
  }


  if(serviceRating==2){
        tipP=10;
        tip=billAmount*0.10;
        totalBill=billAmount+tip;

      return {tipPercentage:tipP,tipAmount:tip,totalAmount:totalBill};
  }


  if(serviceRating==3){
        tipP=15;
        tip=billAmount*0.15;
        totalBill=billAmount+tip;

      return {tipPercentage:tipP,tipAmount:tip,totalAmount:totalBill};
  }


  if(serviceRating==4){
        tipP=20;
        tip=billAmount*0.20;
        totalBill=billAmount+tip;

      return {tipPercentage:tipP,tipAmount:tip,totalAmount:totalBill};
  }


  if(serviceRating==5){
        tipP=25;
        tip=billAmount*0.25;
        totalBill=billAmount+tip;

      return {tipPercentage:tipP,tipAmount:tip,totalAmount:totalBill};
  }



}
