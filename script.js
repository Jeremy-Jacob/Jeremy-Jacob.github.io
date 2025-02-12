// Function to redirect to the "Yes" page
function redirectToYes() {
    window.location.href = "yes-page.html";
  }
  
  // Function to redirect to the next "No" page
  function redirectToNo() {
    const currentPage = window.location.pathname.split('/').pop();
    switch (currentPage) {
      case 'index.html':
        window.location.href = 'no-page.html';
        break;
      case 'no-page.html':
        window.location.href = 'no-page-2.html';
        break;
      case 'no-page-2.html':
        window.location.href = 'no-page-3.html';
        break;
      case 'no-page-3.html':
        window.location.href = 'no-page-final.html';
        break;
      default:
        break;
    }
  }