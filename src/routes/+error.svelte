<script>
 export const error = null;
 export let status;

  // Choix de l'image et du message selon le code
  let imageSrc = '/assets/dog_500-2.webp';
  let message = "Something went wrong on our end.";

  if (status === 404) {
    imageSrc = '/assets/dog_404-1.webp';
    message = "Oops! The page you're looking for doesn't exist.";
  } else if (status === 403) {
    imageSrc = '/assets/dog_403-2.webp';
    message = "Access denied. You're not allowed to see this page.";
  }
</script>

<div class="error-container" style="background-image: url({imageSrc});">
  <div class="error-overlay">
    <h1>{status}</h1>
    <p>{message}</p>
    <a href="/" class="btn">Go Back Home</a>

  </div>
</div>

<style>
.error-container {
  position: relative;
  min-height: 100vh;
  background-position: center top 40px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem;
  color: #fff;
}


.error-overlay {
  background-color: rgba(0, 0, 0, 0.65);
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  margin: auto;
  margin-bottom: 1rem;
}

h1 {
  font-size: 6rem;
  margin-bottom: 1rem;
  color: #ff6b6b;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 6px;
  transition: 0.3s ease;
}

.btn {
  background-color: #2dc34a;
  color: white;
}
.btn:hover {
  background-color: #228b22;
}

</style>
