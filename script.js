function loadContent(file, event) {
  const content = document.getElementById("content");

  // Highlight the selected sidebar item
  highlightSelected(event);

  if (file === 'mcq') {
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
      })
      .catch(error => {
        content.innerHTML = "<p>Error loading content.</p>";
        console.error(error);
      });
  }
}

// Helper function to highlight selected sidebar item
function highlightSelected(event) {
  const items = document.querySelectorAll('.sidebar li');
  items.forEach(item => item.classList.remove('active'));

  if (event && event.target) {
    event.target.classList.add('active');
  }
}

