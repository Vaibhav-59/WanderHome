
    let taxSwitch = document.getElementById("flexSwitchCheckDefault");
  let tax_info = document.querySelectorAll(".tax-info");
  taxSwitch.addEventListener("click", () => {
    console.log("clicked");
    for (const tax of tax_info) {
      if (tax.style.visibility === "visible") {
        tax.style.visibility = "hidden";
      } else tax.style.visibility = "visible";
    }
  });

  let filterCategory = (category) => {
    // Redirect to the specified category
    window.location.href = `/listings/?category=${encodeURIComponent(
      category
    )}`;
  };