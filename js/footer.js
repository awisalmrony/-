
fetch("pages/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading footer:", error));



    document.getElementById("footer-container").innerHTML = '<include src="pages/footer.html"></include>';


