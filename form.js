
  function validateForm() {
    let isValid = true;

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    // Reset errors
    nameError.textContent = "";
    emailError.textContent = "";
    subjectError.textContent = "";
    messageError.textContent = "";

    // Validate Name
    if (!name) {
      nameError.textContent = "Name is required.";
      isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }else if(!emailPattern.test(email)){
      emailError.textContent="invalid email address.";
      isValid=false;
    }

    // Validate Subject
    if (!subject) {
      subjectError.textContent = "Please enter a subject.";
      isValid = false;
    }

    // Validate Message
    if (!message) {
      messageError.textContent = "Please enter a message.";
      isValid = false;
    }

    // Return the validity of the form
    return isValid;
  }





