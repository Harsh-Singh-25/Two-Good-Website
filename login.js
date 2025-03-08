document.getElementById("loginForm").addEventListener("submit", async function(event) {
   event.preventDefault();

   let firstName = document.getElementById("firstName").value;
   let lastName = document.getElementById("lastName").value;
   let email = document.getElementById("email").value;
   let mobileNo = document.getElementById("mobileNo").value;
   let password = document.getElementById("password").value;
   let confirmPassword = document.getElementById("confirmPassword").value;

   if (password !== confirmPassword) {
       alert("Passwords do not match.");
       return;
   }

   const userData = { firstName, lastName, email, mobileNo, password };

   try {
       const response = await fetch("http://localhost:5000/register", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify(userData)
       });

       const data = await response.json();
       if (response.status === 201) {
           alert(data.message);
       } else {
           alert(data.message);
       }
   } catch (error) {
       console.error("Error:", error);
       alert("Failed to connect to server.");
   }
});
   