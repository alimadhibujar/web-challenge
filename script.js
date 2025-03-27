document.addEventListener("DOMContentLoaded", function () {
  const step1 = document.getElementById("step-1");
  const step2 = document.getElementById("step-2");
  const continueBtn = document.getElementById("continue-btn");
  const timeSelect = document.getElementById("time-select");
  const detailsForm = document.getElementById("details-form");
  // const submitBtn = document.getElementById("submit-btn"); // Keep if needed for submit logic

  continueBtn.addEventListener("click", function () {
    if (timeSelect.value === "") {
      alert("Please choose a time.");
      timeSelect.style.borderColor = "red";
      return; // Stop execution
    }
    timeSelect.style.borderColor = "#ced4da";

    // --- View Transition Logic ---
    // Check if browser supports View Transitions
    if (!document.startViewTransition) {
      console.log("View Transitions not supported. Switching directly.");
      step1.classList.remove("active");
      step2.classList.add("active");
      return;
    }

    // Start the view transition
    document.startViewTransition(() => {
      step1.classList.remove("active");
      step2.classList.add("active");
    });
  });

  // --- Event Listener for Form Submission (Step 2) ---
  detailsForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const consentChecked = document.getElementById("consent-checkbox").checked;

    let isValid = true;
    let missingFields = [];

    if (firstName === "") missingFields.push("First Name");
    if (lastName === "") missingFields.push("Last Name");
    if (email === "") missingFields.push("Email");
    if (phone === "") missingFields.push("Phone Number");
    if (!consentChecked) missingFields.push("Consent checkbox");

    if (missingFields.length > 0) {
      alert(
        "Please fill in the following required fields: " +
          missingFields.join(", ")
      );
      isValid = false;
    }

    if (isValid) {
      console.log("Form submitted successfully!");
      console.log("Selected Time:", timeSelect.value);
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Consent:", consentChecked);

      alert("Thank you! Your details have been submitted.");
    }
  });

  // Initialize: Ensure only step 1 is visible on load
  step1.classList.add("active");
  step2.classList.remove("active");
});
