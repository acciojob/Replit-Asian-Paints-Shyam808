document.getElementById("change_button").addEventListener("click", function () {
  const blockId = document.getElementById("block_id").value.trim();
  const color = document.getElementById("colour_id").value.trim();

  // Reset all blocks
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }

  // Apply new color
  const targetBlock = document.getElementById(blockId);
  if (targetBlock) {
    targetBlock.style.backgroundColor = color;
  }
});

document.getElementById("Reset").addEventListener("click", function () {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).style.backgroundColor = "transparent";
  }
});
