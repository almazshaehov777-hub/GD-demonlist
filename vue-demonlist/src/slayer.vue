<script setup>
    import { ref } from 'vue';

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    let globalData = ref([]);

    async function getPlayer(id){
        const promise = await fetch(`https://api.demonlist.org/user/get?id=${id}`);
        const data = await promise.json();
        console.log(data);
        globalData.value = data.data;
    }

    getPlayer(id);
</script>

<template>
    <div class="playerContainer">
        <div class="playerInfo">
            <h1>#{{ globalData.placement }} {{ globalData.username }}</h1>
            <p>Points: {{ globalData.points }}</p>

            <div class="hardest-level">
                <p>#{{ globalData.levels.hardest.placement }} {{ globalData.levels.hardest.name }}</p>
            </div>

            <div class="main-level">
                <div v-for="level in globalData.levels.main" class="main-card">
                    <p>{{ level.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.playerInfo{
    background: #243452;
    width: 550px;
    max-height: 700px;
    border: 3px solid #334468;
    border-radius: 20px;
    overflow-y: auto;
}
.playerContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.main-card{
    white-space: unset;
}
</style>