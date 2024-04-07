const form = document.querySelector('.php-email-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Display the loading message
  const loadingMessage = document.querySelector('.loading');
  loadingMessage.style.display = 'block';

  try {
    // Send the form data to the server
    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form)
    });

    if (response.ok) {
      // Display the success message
      const successMessage = document.querySelector('.sent-message');
      successMessage.style.display = 'block';
    } else {
      // Display the error message
      const errorMessage = document.querySelector('.error-message');
      errorMessage.style.display = 'block';
    }
  } catch (error) {
    // Display the error message
    const errorMessage = document.querySelector('.error-message');
    errorMessage.style.display = 'block';
  } finally {
    // Hide the loading message
    loadingMessage.style.display = 'none';
  }
});
