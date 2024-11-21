// script.js

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

const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    body.classList.toggle('light');
});
