// دالة لتحميل المحتوى من ملف HTML إلى عنصر معين
function loadContent(elementId, filePath) {
  fetch(filePath)
      .then(response => response.text())
      .then(data => {
          document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('خطأ في تحميل المحتوى:', error));
}

// استدعاء الدالة لتحميل المحتوى
loadContent('header', 'pages/header.html');
loadContent('sidebar', 'pages/sidebar.html');
loadContent('main', 'pages/main.html');
loadContent('footer', 'pages/footer.html');




//
// دالة لتحميل المحتوى من ملف HTML إلى عنصر معين
function loadContent() {
    const files = {
        header: 'pages/header.html',
        sidebar: 'pages/sidebar.html',
        main: 'pages/main.html',
        footer: 'pages/footer.html'
    };

    for (const [id, filePath] of Object.entries(files)) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
                if (id === 'sidebar') {
                    // إضافة حدث للنقر على الزر
                    document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
                }
            })
            .catch(error => console.error('خطأ في تحميل المحتوى:', error));
    }
}

// دالة لتبديل ظهور القائمة الجانبية
function toggleSidebar() {
    const sidebarList = document.getElementById('sidebarList');
    if (sidebarList.style.display === 'none' || sidebarList.style.display === '') {
        sidebarList.style.display = 'block'; // إظهار القائمة
    } else {
        sidebarList.style.display = 'none'; // إخفاء القائمة
    }
}

// استدعاء الدالة لتحميل المحتوى عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadContent);
