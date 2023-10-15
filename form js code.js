<script>
    function submitForm() {
      var firstName = document.getElementById("firstName").value;
      var lastName = document.getElementById("lastName").value;
      var dob = document.getElementById("dob").value;
      var country = document.getElementById("country").value;
      var gender = "";
      if (document.getElementById("maleCheckbox").checked) {
        gender += "Male ";
      }
      if (document.getElementById("femaleCheckbox").checked) {
        gender += "Female";
      }
      var profess
ion = document.getElementById("profession").value;
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mobile").value;

      if (firstName && lastName && dob && country && gender && profession && email && mobile) {
        document.getElementById("popupFirstName").textContent = firstName;
        document.getElementById("popupLastName").textContent = lastName;
        document.getElementById("popupDob").textContent = dob;
        document.getElementById("popupCountry").textContent = country;
        document.getElementById("popupGender").textContent = gender;
        document.getElementById("popupProfession").textContent = profession;
        document.getElementById("popupEmail").textContent = email;
        document.getElementById("popupMobile").textContent = mobile;

        document.getElementById("popup").classList.remove("hidden");
      } else {
        alert("Please fill in all the fields.");
      }
    }

    function closePopup() {
      document.getElementById("popup").classList.add("hidden");
      document.getElementById("surveyForm").reset();
    }
  </script>