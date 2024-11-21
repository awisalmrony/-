

fetch("pages/sidebar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("sidebar-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading sidebar:", error));


    document.getElementById("sidebar-container").innerHTML = '<include src="pages/sidebar.html"></include>';



// الحصول على عناصر الزر والقائمة الجانبية
const menuBtn = document.getElementById('menu-btn');
const menuBtnn = document.getElementById('menu-btn1');
const sidebar = document.getElementById('sidebar');

// عند الضغط على الزر، يتم إظهار القائمة الجانبية
menuBtn.addEventListener('click', function() {
    // تحقق مما إذا كانت القائمة الجانبية غير مرئية ثم أظهرها
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none"; // إخفاء القائمة الجانبية
    } else {
        sidebar.style.display = "block"; // إظهار القائمة الجانبية
    }
});

// عند الضغط على الزر، يتم إظهار القائمة الجانبية
menuBtnn.addEventListener('click', function() {
    sidebar.style.display = "none"; // إظهار القائمة الجانبية
});


    
