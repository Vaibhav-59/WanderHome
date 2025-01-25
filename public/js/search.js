
  let searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let searchValue = document.getElementById("search").value;
    console.log(searchValue);
    if (searchValue.trim() !== "") {
      var url = "/listings/?search=" + encodeURIComponent(searchValue);
      console.log(url);
      window.location.href = url;
    
     }
  });
