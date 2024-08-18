document
.getElementById("signUpForm")
.addEventListener("submit", async function (e) {
  e.preventDefault();
  const signUpData = new FormData(this);
  const userObj = Object.fromEntries(signUpData);
  userObj.userRole = 1;
  const jsonUser = JSON.stringify(userObj);
  console.log(jsonUser);
  if (userObj.userName !== "") {
    let userResponse = await fetch(
      "https://elearning.logichubss.com/api/Users",
      {
        method: "POST",
        body: jsonUser,
        headers: {
          "content-type": "application/json",
        },
      }
    );

    let resResult = await userResponse.json();
  }

  document.querySelector(".success-message").style.display = "block";
});