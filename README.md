# Command Categories

<div class="navigator" id="navigator">
  <a href="#" class="nav-link" id="about-link">[!] About</a>
  <input type="text" id="search-bar" placeholder="Search commands..." class="search-bar" />
  <button class="theme-toggle">Toggle Theme</button>
</div>

<div class="about-box" id="about-box">
  <button class="close-btn" id="close-about">&times;</button>
  <h2>About</h2>
  <p>This guide was created by **VM/AM**. It is designed to help you navigate various commands in a stylish and interactive manner. Enjoy exploring!</p>
  <ul>
    <li><strong>Discord:</strong> <a href="https://discord.com/invite/NTTXKCuv" target="_blank">cherry_yuki0</a></li>
    <li><strong>Facebook:</strong> <a href="https://facebook.com/vmam69" target="_blank">VM/AM</a></li>
    <li><strong>YouTube:</strong> <a href="https://youtube.com/@theanonlyricist" target="_blank">The Anon Lyricist</a></li>
  </ul>
</div>

## 1. **Gemini**
<div class="category" data-description="Gemini related commands">
- **<a href="#" class="link">Link1</a>**: Description of Gemini Link1
- **<a href="#" class="link">Link2</a>**: Description of Gemini Link2
- **<a href="#" class="link">Link3</a>**: Description of Gemini Link3
- **API Key Link**: [Get API Key](#) <!-- Replace # with the actual link and remove this text too -->
</div>

<!-- Add other categories here -->

<style>
/* Base Styling */
:root {
  --bg-color-light: #f5f5f5;
  --bg-color-dark: #333;
  --text-color-light: #333;
  --text-color-dark: #f5f5f5;
  --link-color: #3498db;
  --link-hover-color: #2ecc71;
  --button-bg-light: #3498db;
  --button-bg-dark: #2ecc71;
  --button-text-light: #fff;
  --button-text-dark: #333;
}

body {
  background-color: var(--bg-color-light);
  color: var(--text-color-light);
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Courier New', Courier, monospace;
  margin: 0;
  padding: 0;
}

.navigator {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  background-color: var(--bg-color-light);
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  transition: top 0.3s;
}

.nav-link {
  text-decoration: none;
  color: var(--link-color);
  font-size: 18px;
  transition: color 0.3s;
}

.nav-link:hover {
  color: var(--link-hover-color);
}

.search-bar {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  width: 200px;
  transition: border-color 0.3s;
}

.search-bar:focus {
  border-color: var(--link-color);
  outline: none;
}

.link {
  text-decoration: none;
  color: var(--link-color);
  position: relative;
  overflow: hidden;
  display: inline-block;
  padding: 5px;
  border-radius: 5px;
}

.link::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300%;
  height: 300%;
  background: rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease;
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  z-index: 0;
}

.link:hover::before {
  transform: translate(-50%, -50%) scale(1);
}

.link:hover {
  color: var(--link-hover-color);
  transform: scale(1.1);
  z-index: 1;
}

.category {
  margin-bottom: 20px;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* Theme Toggle Button */
.theme-toggle {
  background-color: var(--button-bg-light);
  color: var(--button-text-light);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s;
}

.theme-toggle:hover {
  background-color: var(--button-bg-dark);
  color: var(--button-text-dark);
  transform: scale(1.1);
}

/* Dark Mode and Light Mode */
.dark-mode {
  background-color: var(--bg-color-dark);
  color: var(--text-color-dark);
}

.dark-mode .navigator {
  background-color: var(--bg-color-dark);
}

.dark-mode .link {
  color: var(--link-hover-color);
}

.dark-mode .theme-toggle {
  background-color: var(--button-bg-dark);
  color: var(--button-text-dark);
}

.about-box {
  display: none;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);
  background-color: var(--bg-color-light);
  color: var(--text-color-light);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.about-box.show {
  display: block;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: var(--link-color);
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}

.close-btn:hover {
  color: var(--link-hover-color);
}
</style>

<script>
  // Theme Toggle Functionality
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  // Show About Box
  document.getElementById('about-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById('about-box').classList.add('show');
  });

  // Close About Box
  document.getElementById('close-about').addEventListener('click', () => {
    document.getElementById('about-box').classList.remove('show');
  });

  // Hide/Show Navigator on Scroll
  let lastScrollTop = 0;
  const navbar = document.getElementById('navigator');
  
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.style.top = "-60px"; // Adjust according to navbar height
    } else {
      navbar.style.top = "0";
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });

  // Auto Music Playing
  window.addEventListener('load', () => {
    const audio = new Audio('tired.mp3'); // Replace with your music file path
    audio.loop = true;
    audio.volume = 10.2; // Adjust volume as needed
    audio.play();
  });
</script>
