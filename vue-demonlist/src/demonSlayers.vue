<script setup>
import{ ref } from 'vue';

let loading = ref(false);
let globalData = ([

]);

async function getUserList(){
    loading.value = true;
    const promise = await fetch('https://api.demonlist.org/leaderboard/user/list');
    const data = await promise.json();
    globalData = data.data.users;
    console.log(data);
    loading.value = false;
}
getUserList();
</script>

<template>
    <div v-if="loading == true" class="loading-wrapper">
      <img class="loading" src="./assets/image/i (2)_csecollege.png" width="150">
    </div>

    <h1 class="name" align="center">Top Players</h1>

    <div class="main">
    <div class="playerContainer">
        <div class="userCard" v-for="user in globalData">
            <p><span class="userPlacement">#{{ user.placement }}</span> {{ user.username }}</p>
            <p class="points">Points: {{ user.points }}</p>
        </div>
    </div>
    </div>
</template>

<style scoped>
.playerContainer{
    background: #19243a;
    width: 550px;
    padding: 20px;
    border-radius: 15px;
    max-height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
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
</style>