
/**
 * Utility to download the current HTML page and its assets as a text file
 */
export function downloadProjectAsHtml() {
  // Get the HTML content
  let htmlContent = document.documentElement.outerHTML;
  
  // Modify CSS and JS references to use relative paths
  htmlContent = htmlContent.replace(
    /<link[^>]*href="[^"]*styles\.css"[^>]*>/g, 
    '<link rel="stylesheet" href="styles.css">'
  );
  
  htmlContent = htmlContent.replace(
    /<script[^>]*src="[^"]*script\.js"[^>]*>/g,
    '<script src="script.js"></script>'
  );
  
  // Create a Blob with the HTML content
  const blob = new Blob([htmlContent], { type: 'text/html' });
  
  // Create a download link
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'impulsivesoft-website.html';
  
  // Append to the document, click, and remove
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

/**
 * Function to trigger downloading all current project CSS as a text file
 */
export function downloadProjectCss() {
  // Get all stylesheet links
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  // Extract the CSS content
  if (stylesheets.length > 0) {
    fetch('styles.css')
      .then(response => response.text())
      .then(cssContent => {
        // Create a Blob with the CSS content and preserve formatting
        const blob = new Blob([cssContent], { type: 'text/css' });
        
        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'styles.css';
        
        // Append to the document, click, and remove
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      })
      .catch(error => {
        console.error('Error downloading CSS:', error);
        alert('Failed to download CSS. Check console for details.');
      });
  }
}

/**
 * Function to trigger downloading the JavaScript file
 */
export function downloadProjectJs() {
  fetch('script.js')
    .then(response => response.text())
    .then(jsContent => {
      // Create a Blob with the JS content
      const blob = new Blob([jsContent], { type: 'text/javascript' });
      
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'script.js';
      
      // Append to the document, click, and remove
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    })
    .catch(error => {
      console.error('Error downloading JavaScript:', error);
      alert('Failed to download JavaScript. Check console for details.');
    });
}

/**
 * Function to trigger all downloads
 */
export function downloadFullProject() {
  downloadProjectAsHtml();
  
  // Wait a moment before starting the next download
  setTimeout(() => {
    downloadProjectCss();
    
    // Wait a moment before starting the JS download
    setTimeout(() => {
      downloadProjectJs();
    }, 1000);
  }, 1000);
}
