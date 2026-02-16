/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let message="";
  let count=0;
  
   if(!password || typeof(password)!='string'){
   return "weak";  
  }
  

  

  if(password.length>=8){
    count=count+1;
  }

  if(/[A-Z]/.test(password)){
    count=count+1;
  }

  if(/[a-z]/.test(password)){
    count=count+1;
  }

   if(/[0-9]/.test(password)){
    count=count+1;
  }

   if(/[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)){
    count=count+1;
  }

  if(count<=1){
    message="weak";
  }

  if(count==2||count==3){
    message="medium";
  }

   if(count==4){
    message="strong";
  }

   if(count==5){
    message="very strong";
  }

  return message;
}
