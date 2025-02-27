<template>
      <footer>
        <div class="footer-content">
          <p>&copy; ブロスタサークル | KTC</p>
          <div class="social-links">
            <a href="https://twitter.com/kaguyaclub" target="_blank">公式Twitter</a>
            <a href="https://www.instagram.com/kaguyaclub" target="_blank">公式Instagram</a>
            <a href="https://www.youtube.com/channel/kaguyaclub" target="_blank">公式YouTube</a>
          </div>
        </div>
      </footer>
</template>



<style>

a {
    color: #1e90ff;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  p{
    color: white;
  }

/* フッター */
footer {
  background-color: rgba(17, 17, 17, 0.8);
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  font-size: 1.2em;
}

.social-links a:hover {
  color: #1e90ff;
}</style>
