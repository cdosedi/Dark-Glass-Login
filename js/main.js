(function () {
  "use strict";

  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const loginBtn = document.getElementById("loginBtn");
  const btnText = document.querySelector(".btn-text");
  const btnLoader = document.querySelector(".btn-loader");
  const togglePasswordBtn = document.getElementById("togglePassword");
  const togglePasswordIcon = togglePasswordBtn.querySelector(".toggle-icon");

  const EYE_ICON_SVG = '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
  const EYE_OFF_ICON_SVG = '<path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.82m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const showError = (element, message) => {
    element.textContent = message;
    element.style.display = "block";
  };

  const hideError = (element) => {
    element.textContent = "";
    element.style.display = "none";
  };

  const setLoading = (isLoading) => {
    if (isLoading) {
      loginBtn.disabled = true;
      loginBtn.classList.add("loading");
      btnLoader.style.display = "block";
      btnText.style.visibility = "hidden";
    } else {
      loginBtn.disabled = false;
      loginBtn.classList.remove("loading");
      btnLoader.style.display = "none";
      btnText.style.visibility = "visible";
    }
  };

  togglePasswordBtn.addEventListener("click", () => {
    const isPassword = passwordInput.type === "password";
    passwordInput.type = isPassword ? "text" : "password";
    togglePasswordIcon.innerHTML = isPassword ? EYE_OFF_ICON_SVG : EYE_ICON_SVG;
    passwordInput.focus();
  });

  emailInput.addEventListener("blur", () => {
    const value = emailInput.value.trim();
    if (!value) {
      showError(emailError, "Email address is required.");
    } else if (!isValidEmail(value)) {
      showError(emailError, "Please enter a valid email address.");
    } else {
      hideError(emailError);
    }
  });

  emailInput.addEventListener("input", () => hideError(emailError));

  passwordInput.addEventListener("blur", () => {
    if (!passwordInput.value.trim()) {
      showError(passwordError, "Password is required.");
    } else {
      hideError(passwordError);
    }
  });

  passwordInput.addEventListener("input", () => hideError(passwordError));

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    let hasError = false;
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email) {
      showError(emailError, "Email address is required.");
      hasError = true;
    } else if (!isValidEmail(email)) {
      showError(emailError, "Please enter a valid email address.");
      hasError = true;
    } else {
      hideError(emailError);
    }

    if (!password) {
      showError(passwordError, "Password is required.");
      hasError = true;
    } else {
      hideError(passwordError);
    }

    if (hasError) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.location.href = "/dashboard.html";
    } catch (error) {
      showError(passwordError, "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  });

  document.querySelectorAll(".social-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const provider = btn.getAttribute("data-provider");
    });
  });
})();
