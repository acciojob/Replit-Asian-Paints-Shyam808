window.onload = function () {
  document.getElementById("change_button").addEventListener("click", function () {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    // Reset all blocks to transparent
    for (let i = 1; i <= 9; i++) {
      const box = document.getElementById(i.toString());
      box.style.backgroundColor = "transparent";
    }

    // Change color only if valid blockId
    const target = document.getElementById(blockId);
    if (target) {
      target.style.backgroundColor = color;
    }
  });

  document.getElementById("Reset").addEventListener("click", function () {
    for (let i = 1; i <= 9; i++) {
      const box = document.getElementById(i.toString());
      box.style.backgroundColor = "transparent";
    }
  });
};
