



fetch("pages/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;
        
        // بعد تحميل المحتوى، قم بإضافة حدث الضغط على الزر
        document.getElementById("toggle-sidebar-btn").addEventListener("click", function() {
            const sidebar = document.getElementById("sidebar-container");
            sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
        });
    })
    .catch(error => console.error("Error loading header:", error));

//
    document.getElementById("header-container").innerHTML = '<include src="pages/header.html"></include>';
document.getElementById("toggle-sidebar-btn").addEventListener("click", function() {
    const sidebar = document.getElementById("sidebar-container");
    sidebar.style.display = sidebar.style.display === "none" ? "block" : "none";
});







    
