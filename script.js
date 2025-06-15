function loginUser() {
    const loginEmail = document.getElementById("loginEmail").value.trim();
    const loginPassword = document.getElementById("loginPassword").value;

    const storedEmail = localStorage.getItem("registeredEmail");
    const storedPassword = localStorage.getItem("registeredPassword");

   if (loginEmail === storedEmail && loginPassword === storedPassword) {
      window.location.href = "home.html";
    } else {
      alert("Invalid email or password.");
    }
  }
