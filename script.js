const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all backgrounds
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  const target = document.getElementById(blockId);
  if (target) {
    target.style.backgroundColor = color;
  } else {
    alert("Invalid Block ID. Please enter a number between 1 and 9.");
  }
});

resetBtn.addEventListener("click", () => {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});
