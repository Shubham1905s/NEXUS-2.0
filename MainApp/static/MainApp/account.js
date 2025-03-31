function openBlock() {
  let block = document.getElementById("block");
  block.style.display = "flex";
  setTimeout(() => {
    block.style.opacity = "3";
  }, 10);
}
function closeBlock() {
  document.getElementById("block").style.display = "none";
}
function validateForm() {
  if (document.getElementById("password").value.length < 4) {
    alert("passwords must be atleast of 4 characters");
    return false;
  } else if (
    document.getElementById("password").value !==
    document.getElementById("password2").value
  ) {
    alert("passwords don't match");
    return false;
  }
}
