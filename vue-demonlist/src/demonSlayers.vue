<script setup>
import{ ref, computed, onMounted } from 'vue';

let loading = ref(false);
let globalData = ref([

]);
let search = ref('');
let searchData = computed(() => {
        if(!search.value){
            return globalData.value;
        }
        return globalData.value.filter(user => 
        user.username.toLowerCase().includes(search.value.toLowerCase())
    );
});

async function getUserList(){
    loading.value = true;
    const promise = await fetch('https://api.demonlist.org/leaderboard/user/list');
    const data = await promise.json();
    globalData.value = data.data.users;
    
    console.log(data);
    loading.value = false;
}

onMounted(() => {
    getUserList();
});

</script>

<template>
    <div v-if="loading == true" class="loading-wrapper">
      <img class="loading" src="./assets/image/i (2)_csecollege.png" width="150">
    </div>

    <h1 class="name" align="center">Top Players</h1>
    <div class="inputCon">
        <input type="text" v-model="search" class="input" placeholder="Player name">
    </div>

    <div class="main">
    <div class="playerContainer">
        <router-link :to="`/slayerInfo/?id=${user.id}`" v-for="user in searchData" class="transition">
        <div class="userCard">
            <p><span class="userPlacement">#{{ user.placement }}</span> {{ user.username }}</p>
            <p class="points">Points: {{ user.points }}</p>
        </div>
        </router-link>
    </div>
    </div>
</template>

<style scoped>
.playerContainer{
    background: #19243a;
    width: 700px;
    padding: 30px;
    border-radius: 15px;
    max-height: 750px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-bottom: 40px;
    border: 3px solid #25385e;
}
.playerContainer::-webkit-scrollbar{
    color: transparent;
}
.userCard{
    background: #27385a;
    padding: 10px;
    margin-bottom: 20px;
    color: white;
    font-size: 20px;
    font-family: Montserrat;
    border-radius: 10px;
    transition: 0.15s ease;
    cursor: pointer;
}
.userCard:hover{
    background: #202d49;
}
.main{
    display: flex;
    justify-content: center;
}
.loading-wrapper{
  position: fixed !important;
  inset: 0 !important;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
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
.userPlacement{
    margin-right: 10px;
    color: #b4c3e6;
    margin-left: 10px;
}
.points{
    margin-left: 10px;
}
@keyframes animLoading{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
.name{
    font-family: Montserrat;
    color: white;
    margin-bottom: 50px;
}
.transition{
    text-decoration: none;
}
.input{
    border: 2px solid #354f83;
    border-radius: 5px;
    height: 25px;
    width: 350px;
    background: #27385a;
    color: white;
    font-size: 16px;
    font-family: Montserrat;
}
.inputCon{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
.input::placeholder{
    color: rgba(255,255,255,0.5);
}
.input:focus{
    outline: none;
}
</style>