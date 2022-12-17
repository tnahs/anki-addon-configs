document.addEventListener("DOMContentLoaded", () => {
  setupObserver();
});

function setupObserver() {
  const card = document.querySelector("#qa");

  const observer = new MutationObserver(setupPeekFields);

  observer.observe(card, { childList: true });
}

function setupPeekFields() {
  const peekFields = document.querySelectorAll(".card .field.peek");

  if (peekFields.length == 0) {
    return;
  }

  for (let peekField of peekFields) {
    if (peekField.childNodes.length == 0) {
      continue;
    }

    const container = document.createElement("div");
    container.classList.add("_peek");

    // Transfer all child nodes into the container div...
    while (peekField.childNodes.length > 0) {
      container.appendChild(peekField.childNodes[0]);
    }

    // ...and add the container div to the peek field
    peekField.appendChild(container);
  }
}
