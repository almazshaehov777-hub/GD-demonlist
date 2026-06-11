<script setup>
  import { onMounted, ref } from 'vue';

  let loading = ref(false);
  let limit = ref(75);

  async function getList(limit){
    loading.value = true;
    let container = document.getElementById('levelContainer');
    const response = await fetch('https://api.demonlist.org/level/classic/list');
    const data = await response.json();
    console.log(data);
    let html = '';
    let limitedData = data.data.levels.slice(0, limit);

    for(let i = 0; i<limitedData.length; ++i){

      let datal = data.data.levels[i];
      const responseImage = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(datal.verification_url)}`);
      const dataImage = await responseImage.json();
      html += `
        <div class="card">
          <img src="${dataImage.thumbnail_url}" class="prewiev">
          <p class="placement">#${datal.placement}</p>
          <p class="nameLevel">${datal.name}</p>
        </div>
      `
    }

    container.innerHTML = html;
    loading.value = false;
  }

  onMounted(() =>{
    getList(limit.value);
  });
</script>

<template>
  <div v-if="loading == true" class="loading-wrapper">
      <img class="loading" src="./assets/image/i (2)_csecollege.png" width="150">
  </div>
  <header>
    <div class="bg">
      <h1 class="logo"><span class="gd">GD</span> Demonlist</h1>
    </div>
  </header>

  <main>
    <div id="levelContainer" class="container">
      
    </div>
    
    <div class="containerBtn">
      <button @click="limit += 75; getList(limit)" class="loadingBtn" v-if="loading == false">▼</button>
    </div>
  </main>

  <footer>
    <div class="bgFooter">

    </div>
  </footer>
</template>

<style scoped>
.bg{
  background: #0c111d;
  display: flex;
  color: white;
  font-family: Montserrat;
  padding: 5px;
  z-index: 1;
}
.logo{
  margin-left: 30px;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.gd{
  color: 	#A0AFD1;
}
.loading{
  color: white;
  font-family: Montserrat;
  font-size: 30px;
  position: absolute;
  top: 45%;
  left: 45%;
  animation: animLoading 1.5s infinite;
  position: fixed;
}
@keyframes animLoading{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.loading-wrapper{
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}
.loadingBtn{
  margin-top: 30px;
  width: 60px;
  height: 60px;
  font-size: 50px;
  border: 0;
  border-radius: 35px;
  cursor: pointer;
  background: transparent;
  color: white;
  transition: 0.2s ease;
}
.loadingBtn:hover{
  color: lightgray;
  transform: translateY(-5px);
}
.containerBtn{
  display: flex;
  justify-content: center;
}
</style>