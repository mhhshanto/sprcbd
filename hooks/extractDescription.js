"use client"

function extractDescription(content) {
    // Extract text from HTML and limit it to 160 characters
    const tempElement = document.createElement("div");
    tempElement.innerHTML = content;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    return textContent.substring(0, 160) + (textContent.length > 160 ? "..." : "");
  }

  export default extractDescription;