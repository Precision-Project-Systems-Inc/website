(() => {
  // ns-hugo-params:<stdin>
  var stdin_default = { main_descriptors: ["project tracking", "data versioning", "general checksum hashing"] };

  // <stdin>
  document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typing-text");
    const textArray = stdin_default.main_descriptors;
    console.log(textArray);
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100;
    const pauseBetweenWords = 2e3;
    function type() {
      if (charIndex < textArray[index].length) {
        textElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(erase, pauseBetweenWords);
      }
    }
    function erase() {
      if (charIndex > 0) {
        textElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed);
      } else {
        index = (index + 1) % textArray.length;
        setTimeout(type, typingSpeed);
      }
    }
    function blinkCursor() {
      setInterval(() => {
        if (textElement.style.borderRightColor === "transparent") {
          textElement.style.borderRightColor = "orange";
        } else {
          textElement.style.borderRightColor = "transparent";
        }
      }, 750);
    }
    if (textElement) {
      type();
      blinkCursor();
    }
  });
})();
