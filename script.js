$(document).ready(function () {
  const card1 = $(".card-1");
  const card2 = $(".card-2");
  const passwordInput = $("#password-input");

  $("#password-submit").click(function () {
    const password = passwordInput.val();

    // Check if the entered password is correct
    if (password === "Vintermys") {
      card1.addClass("fade-out");
      setTimeout(function () {
        card1.css("display", "none");
        card2.css("display", "flex"); // Ensure card-2 is displayed before fading in
        setTimeout(function () {
          card2.addClass("fade-in");
        }, 50); // A small delay before adding the fade-in class
      }, 500); // Adjust the timing to match your transition duration
    } else {
      // Handle incorrect password (you can add your own logic here)
      console.log("Incorrect password");
    }
  });
});
