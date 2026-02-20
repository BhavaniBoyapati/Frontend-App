const API_BASE_URL = "http://127.0.0.1:4000";
 
async function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
 
  try {
    const res = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
 
    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);
 
  } catch (error) {
    console.error("Full error:", error);
  }
}
