fetch("page2header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("page2header-placeholder").innerHTML = data;
  });