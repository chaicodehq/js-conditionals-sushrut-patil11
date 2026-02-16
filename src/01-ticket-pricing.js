/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
  let price=0; 
export function getTicketPrice(age, isWeekend) {
  // Your code here
  if(age>=0 && age<=12){
    if(isWeekend){
      price=11;
      return price;
    }
    price=8;
    return price;
  }else if(age>=13 && age<=17){
    if(isWeekend){
      price=15;
      return price;
    }
    price=12;
    return price;
  }else if(age>=18 && age<=59){
    if(isWeekend){
      price=18;
      return price;
    }
    price=15;
    return price;
  }else if(age>=60){
    if(isWeekend){
      price=13;
      return price;
    }
      price=10;
     return price;
  }else
    return -1
}
