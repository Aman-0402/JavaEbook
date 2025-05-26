function loadContent(file, event) {
  const content = document.getElementById("content");

  // Highlight the selected sidebar item
  highlightSelected(event);

  // Fix edge case: remove accidental quote break or missing file extension
  if (!file.endsWith('.html') && file !== 'mcq') {
    file += '.html';
  }

  if (file === 'mcq.html' || file === 'mcq') {
    // Dynamically load the MCQ script only once
    if (!document.getElementById('mcq-script')) {
      const script = document.createElement('script');
      script.src = 'content/mcq.js';
      script.id = 'mcq-script';
      script.onload = () => loadMCQ();
      document.body.appendChild(script);
    } else {
      loadMCQ();
    }
  } else {
    fetch(`content/${file}`)
      .then(response => {
        if (!response.ok) throw new Error('Content not found');
        return response.text();
      })
      .then(data => {
        content.innerHTML = data;
        closeSidebarOnMobile(); // Auto-close sidebar on mobile after loading
      })
      .catch(error => {
        content.innerHTML = "<p>Error loading content.</p>";
        console.error(error);
      });
  }
}

// Highlight selected sidebar item
function highlightSelected(event) {
  const items = document.querySelectorAll('.sidebar li');
  items.forEach(item => item.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }
}

// Sidebar toggle for mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleSidebar");
  const sidebar = document.querySelector(".sidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
});

// Close sidebar after selection (mobile view)
function closeSidebarOnMobile() {
  const sidebar = document.querySelector(".sidebar");
  if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
    sidebar.classList.remove("active");
  }
}
