document.addEventListener("DOMContentLoaded", () => {
  // Select all love and claim buttons
  const loveButtons = document.querySelectorAll(".btn-love");
  const claimButtons = document.querySelectorAll(".btn-claim");
  const grantWishButton = document.getElementById("grant-a-wish-button");

  // Function to show alert and scroll to "Grant a Wish" form
  const promptUserToGrantWish = () => {
    alert(
      'You have claimed this wish! Please click the "Grant a Wish" button and fill out your details in the "Grant a Wish" form.'
    );
    grantWishButton.scrollIntoView({ behavior: "smooth" });
  };

  // Add event listener to each love button
  loveButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Increment the love count
      const currentCount = parseInt(button.textContent.split(" ")[1], 10);
      button.textContent = `🤍 ${currentCount + 1}`;
    });
  });

  // Add event listener for each claim button
  claimButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Find the parent wish element
      const wishItem = button.closest(".wish");

      //Find the paragraph containing the wish text
      const wishText = wishItem.querySelector("p");

      // Add the [CLAIMED] flag if not already present
      if (!wishText.textContent.startsWith("[CLAIMED]")) {
        wishText.textContent = "[CLAIMED] " + wishText.textContent;
        promptUserToGrantWish();
      }
    });
  });
});
