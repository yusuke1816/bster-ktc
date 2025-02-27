<template>
  <header>
    <div class="logo-container">
      <nuxt-link to="/">
        <img src="/assets/b-iconn.png" alt="チームロゴ" class="logo" />
      </nuxt-link>
      <h1 class="team-name">ブロスタサークル</h1>
    </div>

    <!-- ハンバーガーメニュー -->
    <div class="hamburger" @click="toggleMenu">
      <span v-if="!isMenuOpen">☰</span>
      <span v-if="isMenuOpen">×</span>
    </div>

    <!-- メニュー -->
    <nav v-show="isMenuOpen" class="mobile-nav">
      <!-- 閉じるボタンをヘッダー上部に固定 -->
      <div class="close-btn" @click="toggleMenu">×</div>
      <ul class="nav-list">
        <li><nuxt-link to="/about" active-class="active">メンバー紹介</nuxt-link></li>
        <li><nuxt-link to="/achievements" active-class="active">活動</nuxt-link></li>
        <li><nuxt-link to="/news" active-class="active">ニュース</nuxt-link></li>
        <li><nuxt-link to="/#store" active-class="active">ストア</nuxt-link></li>
        <li><nuxt-link to="/qa" active-class="active">お問い合わせ</nuxt-link></li>
      </ul>
    </nav>

    <!-- 通常のナビゲーション（デスクトップ用） -->
    <nav class="desktop-nav">
      <ul class="nav-list">
        <li><nuxt-link to="/about" active-class="active">メンバー紹介</nuxt-link></li>
        <li><nuxt-link to="/achievements" active-class="active">活動</nuxt-link></li>
        <li><nuxt-link to="/news" active-class="active">ニュース</nuxt-link></li>
        <li><nuxt-link to="/#store" active-class="active">ストア</nuxt-link></li>
        <li><nuxt-link to="/qa" active-class="active">お問い合わせ</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const isMenuOpen = ref(false) // メニューの状態管理
const router = useRouter()

// メニューの開閉トグル関数
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// 画面遷移後にメニューを閉じる
router.afterEach(() => {
  isMenuOpen.value = false // メニューを閉じる
})

</script>

<style scoped>
/* ヘッダー */
header {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.531);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
  z-index: 1; /* ヘッダーはz-index:1 */
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 130px;
  margin-right: 10px;
}

.team-name {
  font-size: 2.5em;
  font-weight: bold;
}

nav {
  margin-left: auto;
  border-radius: 10px;
  padding: 10px 20px;
}

/* 通常のデスクトップナビゲーション */
.desktop-nav {
  display: block;
}

.nav-list {
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.nav-list li {
  position: relative;
}

.nav-list li a,
.nav-list li nuxt-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 1.2em;
  transition: color 0.3s;
}

.nav-list li a::after,
.nav-list li nuxt-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #e91eff;
  transition: width 0.3s ease;
}

.nav-list li a:hover::after,
.nav-list li nuxt-link:hover::after {
  width: 100%;
}

/* アクティブなリンクのスタイル */
.nav-list li a.active,
.nav-list li nuxt-link.active {
  color: #e91eff;
  font-weight: bold;
}

/* モバイル用メニュー */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mobile-nav ul {
  display: block;
  margin-top: 10px;
}

.mobile-nav li {
  margin-bottom: 15px;
}

.hamburger {
  font-size: 2.5em;
  cursor: pointer;
  display: none;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2.5em;
  cursor: pointer;
  color: #ffffff;
  z-index: 3;
}

@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger {
    display: block;
  }
}

@media (max-width: 420px) {
  .team-name {
    font-size: 1.3rem;
    font-weight: bold;
  }
  .logo {
    width: 90px;
    margin-right: 10px;
  }
}
</style>
