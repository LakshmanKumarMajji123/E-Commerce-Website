// Send OTP

function sendOTP() {
  let phoneNumber = document.getElementById("phoneNumber").value;
  // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP Sent Successfully!");
      document.getElementById("otp-section").style.display = "block";
    }).catch((error) => {
      alert("Error sending OTP: " + error.message);
    });
}

// Verify OTP
function verifyOTP() {
  let otpCode = document.getElementById("otpCode").value;
  confirmationResult.confirm(otpCode)
    .then((result) => {
      alert("OTP Verified Successfully! Welcome, " + result.user.phoneNumber);
    }).catch((error) => {
      alert("Invalid OTP! Please try again.");
    });
}