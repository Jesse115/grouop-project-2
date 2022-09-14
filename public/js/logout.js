const logoutElement = document.querySelector("#logout");
const handleLogout = async (event) => {
  event.preventDefault();
  const response =await fetch("/api/user/logout",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace("/login");
  } else {
    alert("Failed to log out.");
  }
  console.log("Logout");
};
logoutElement.addEventListener("click", handleLogout);
