document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", function () {
      // Prompt for password
      const password = prompt("Enter the password:");

      // Check if the password is correct
      if (password === "1") {
        // Replace 'yourpassword' with your actual password
        // Rotate the card 180 degrees
        card.classList.toggle("flipped");
      } else {
        alert("Incorrect password. Try again.");
      }
    });
  });
});
