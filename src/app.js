const API_BASE_URL = "https://api.mbry.digital";
 
async function loadUsers() {
  try {
    const res = await fetch(`${API_BASE_URL}/users`);
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("result").innerText =
      "Error: " + error.message;
  }
}
 
async function loadOrders() {
  try {
    const res = await fetch(`${API_BASE_URL}/orders`);
    if (!res.ok) throw new Error("Failed to fetch orders");
    const data = await res.json();
    document.getElementById("result").innerText =
      JSON.stringify(data, null, 2);
  } catch (error) {
    document.getElementById("result").innerText =
      "Error: " + error.message;
  }
}
