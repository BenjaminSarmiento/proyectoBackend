let cart = {};
const navCartUrl = document.getElementById("navCartUrl");

const redirect = (pid) => {
  window.location.href = `http://localhost:8080/products/${pid}`;
};

const handleCart = async () => {
  const response = await fetch("http://localhost:8080/api/carts", {
    method: "POST",
  });
  if (response.status === 201) {
    const json = await response.json();
    cart.id = json.payload._id;
    cart.products = json.payload.products;
    navCartUrl.href =`http://localhost:8080/carts/${cart.id}`
  }
};

window.onload = handleCart;