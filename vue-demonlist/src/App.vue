<script setup>

</script>

<template>
  <header>
    <div class="bg">
      <img src="./assets/image/icon.png" width="65" height="65" class="imageLogo">
      <h1 class="logo"><span class="gd">GD</span> Demonlist</h1>
      <nav class="navigation">
        <router-link to="/">List</router-link>
        <router-link to="slayer">Slayer</router-link>
      </nav>
    </div>
  </header>
  
  <main>
    <router-view />
  </main>

  <footer>
    <div class="bgFooter">
      <p class="footerText">Global Demonlist API • 2026</p>
    </div>
  </footer>
</template>

<style>
.navigation a{
  color: white;
  text-decoration: none;
  margin-left: 30px;
  font-size: 20px;
  font-family: Montserrat;
  transition: 0.2s ease;
  display: inline-block;
}
.bg{
  background: #0c111d;
  display: flex;
  color: white;
  font-family: Montserrat;
  padding: 5px;
  z-index: 1;
  align-items: center;
}
.imageLogo{
  position: relative;
  transform: rotate(45deg);
  margin-left: 60px;
}
.gd{
  color: 	#A0AFD1;
  margin-left: 15px;
}
.navigation a:hover{
  color: lightgrey;
  transform: translateY(-3px);
  text-shadow: -10px 5px #172138;
}
.bgFooter{
  background: #0c111d;
  display: flex;
  padding: 25px;
}
.footerText{
  font-family: Montserrat;
  color: rgba(78, 78, 78, 0.6);
}
.logo{
  text-shadow:
  0 0 5px #1a243b,
  0 0 10px #1a243b,
  0 0 15px #1a243b;
}
</style>