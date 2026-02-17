const API_BASE_URL = "https://mbry.digital"; 
// Change to https://mbry.digital when deployed
 
// ================= REGISTER =================
async function registerUser() {
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
 
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
}
 
// ================= LOGIN =================
async function loginUser() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
 
  const res = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
 
  const data = await res.json();
  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}
 
// ================= LOAD USERS =================
async function loadUsers() {
  const res = await fetch(`${API_BASE_URL}/users`);
  const data = await res.json();
  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}
 
// ================= LOAD ORDERS =================
async function loadOrders() {
  const res = await fetch(`${API_BASE_URL}/orders`);
  const data = await res.json();
  document.getElementById("result").innerText =
    JSON.stringify(data, null, 2);
}
