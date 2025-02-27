<template>
	<div>
		<Header />
    <slot />
		<Footer />
	</div>
</template>
<script>
	import Header from "../components/Header.vue"; // headerをインポート
	import Footer from "../components/Footer.vue"; // footerをインポート
	export default {
		components: {
			Header,
			Footer
		}
	};
</script>

<script setup>

</script>


<style>
@import url('https://fonts.googleapis.com/earlyaccess/nicomoji.css');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p&display=swap');
/* リセットCSSの一例 */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;

}

img {
  max-width: 100%;
  height: auto;
}

button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

input, select, textarea {
  border: 1px solid #ccc;
  font-size: 100%;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  padding: 8px;
  text-align: left;
}

h1 {
  font-family: 'Nico Moji', sans-serif; /* Apply Nico Moji font */
  color: #000; /* Set text color to black */
  text-shadow:
    1px 1px 0 #fff,   /* Top-right shadow */
    -1px -1px 0 #fff, /* Bottom-left shadow */
    1px -1px 0 #fff,  /* Top-left shadow */
    -1px 1px 0 #fff;  /* Bottom-right shadow */
}



h2 {
  font-family: 'M PLUS 1p', sans-serif; /* フォントをM PLUS 1pに設定 */
  color: #000; /* テキストカラーを黒に設定 */
  text-shadow:
    1px 1px 0 #fff,   /* 右上の影 */
    -1px -1px 0 #fff, /* 左下の影 */
    1px -1px 0 #fff,  /* 左上の影 */
    -1px 1px 0 #fff;  /* 右下の影 */
}
</style>


