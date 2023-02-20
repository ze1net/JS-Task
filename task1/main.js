const submitBtn = document.getElementById("btn");

submitBtn.addEventListener("click", function() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value;

  if (name.length >= 3 && name.indexOf("<") === -1) {
    const message = `Welcome ${name}!`;
    alert(message);
  } else {
    alert("Ismingizda 3dadan  kop harf bo`lsin");
  }
});
