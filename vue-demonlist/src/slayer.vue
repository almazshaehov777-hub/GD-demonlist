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

    function goToYoutube(url){
        window.location.href = url;
    }
    function back(){
        history.back();
    }
</script>

<template>
    <div class="playerContainer">
        <div class="playerInfo">
            <div class="name-con">
                <button class="backBtn" @click="back()">🠔</button>
                <h1 class="playerName">{{ globalData.username }}</h1>
            </div>

            <div class="player-info-main">
                <div class="player-placement-con">
                    <p><span>🏆</span> Top: <span class="player-placement">#{{ globalData.placement }}</span></p>
                </div>
                <div class="player-points">
                    <p>✨ Points: {{ globalData.points }}</p>
                </div>
            </div>

            <div class="hardest-con">
            <div class="hardest-level">
                <h2>🔥 Hardest level</h2>
                <p><span class="hardest-placement">#{{ globalData.levels.hardest.placement }}</span> {{ globalData.levels.hardest.name }}</p>
            </div>
            </div>

            <div class="main-con" v-if="globalData.levels.main.length > 0">
            <div class="main-level">
                <h2 class="name">⭐ Main levels</h2>
                <div v-for="level in globalData.levels.main" class="main-card" @click="goToYoutube(level.video_url)">
                    <p>{{ level.name }}</p>
                </div>
            </div>
            </div>
            <div class="extended-con" v-if="globalData.levels.extended.length > 0">
                <div class="extended-level">
                    <h2 class="name2">🌟 Extended levels</h2>
                    <div v-for="level in globalData.levels.extended" class="extended-card" @click="goToYoutube(level.video_url)">
                        <p>{{ level.name }}</p>
                    </div>
                </div>
            </div>

            <div class="advanced-con" v-if="globalData.levels.advanced.length > 0">
                <div class="advanced-level">
                    <h2 class="name">🟢 Advanced levels</h2>
                    <div v-for="level in globalData.levels.advanced" class="advanced-card" @click="goToYoutube(level.video_url)">
                        <p>{{ level.name }}</p>
                    </div>
                </div>
            </div>

            <div class="unbounded-con" v-if="globalData.levels.unbounded.length > 0">
                <div class="unbounded-level">
                    <h2 class="name">🌐 Unbounded levels</h2>
                    <div v-for="level in globalData.levels.unbounded" class="unbounded-card" @click="goToYoutube(level.video_url)">
                        <p>{{ level.name }}</p>
                    </div>
                </div>
            </div>

            <div class="verified-con" v-if="globalData.levels.verified.length > 0">
                <div class="verified-level">
                    <h2 class="name">✅ Verified level</h2>
                    <div v-for="level in globalData.levels.verified" class="verified-card" @click="goToYoutube(level.video_url)">
                        <p>{{ level.name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.playerInfo{
    background: #243452;
    width: 700px;
    max-height: 900px;
    border: 3px solid #334468;
    border-radius: 20px;
    overflow-y: auto;
    margin-bottom: 70px;
    margin-top: 70px;
}
.playerInfo::-webkit-scrollbar{
    color: transparent;
}
.playerContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.main-card, .extended-card, .advanced-card{
    display: inline-block;
    background-color: #2e4268;
    border: 3px solid #172746;
    border-radius: 15px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: Montserrat;
    color: lightgray;
    font-size: 14px;
    text-align: center;
    margin: 3px;
    transition: 0.2s ease;
    cursor: pointer;
    align-items: center;
}
.main-card:hover, .extended-card:hover, .advanced-card:hover, .unbounded-card:hover{
    transform: scale(1.02);
    background: #324970;
    border: 3px solid lightcoral;
    box-shadow: -10px 10px 25px rgba(0, 0, 0, 0.5);
}
.main-level{
    background: linear-gradient(#c0212e, #74121a);
    border: 5px solid #4b0000;
    width: 600px;
    border-radius: 15px;
    padding: 10px;
}
.main-con{
    display: flex;
    justify-content: center;
}
.name{
    color: lightgray;
    font-family: Montserrat;
    margin-left: 30px;
}
.extended-level{
    background: linear-gradient(rgb(243, 239, 0), rgb(202, 199, 0));
    border: 5px solid rgb(90, 81, 1);
    width: 600px;
    border-radius: 15px;
    padding: 10px;
}
.extended-con, .advanced-con{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.advanced-level{
    background: linear-gradient(rgb(0, 207, 0), rgb(2, 173, 2));
    border: 5px solid rgb(1, 107, 1);
    width: 600px;
    border-radius: 15px;
    padding: 10px;
}
.name2{
    color: rgb(116, 116, 116);
    font-family: Montserrat;
    margin-left: 30px;
}
.unbounded-con{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
}
.unbounded-level{
    background: linear-gradient(#405b8f, #273757);
    border: 5px solid #172746;
    border-radius: 15px;
    padding: 10px;
    width: 600px;
}
.unbounded-card{
    display: inline-block;
    background-color: #355185;
    border: 4px solid #203663;
    border-radius: 15px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: Montserrat;
    color: lightgray;
    font-size: 14px;
    text-align: center;
    margin: 3px;
    transition: 0.2s ease;
    cursor: pointer;
}
.verified-card{
    display: inline-block;
    background-color: #2f4877;
    border: 3px solid rgba(0, 189, 0, 0.884);
    border-radius: 15px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: Montserrat;
    color: lightgray;
    font-size: 14px;
    text-align: center;
    margin: 3px;
    transition: 0.2s ease;
    cursor: pointer;
}
.verified-card:hover{
    transform: scale(1.02);
    background: #324970;
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.5);
}
.verified-level{
    background: rgba(0, 255, 0, 0.3);
    border: 0px solid rgb(0, 211, 0);
    border-radius: 15px;
    padding: 15px;
    padding-bottom: 30px;
    width: 600px;
}
.verified-con{
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}
.hardest-level{
    color: lightgray;
    font-family: Montserrat;
    background: linear-gradient(rgba(255, 166, 0, 0.6), rgba(189, 25, 25, 0.5));
    width: 600px;
    padding: 15px;
    border-radius: 15px;
    border: 2px solid rgb(235, 55, 0);
}
.hardest-con{
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}
.hardest-placement{
    color: #ffa760;
}
.hardest-level>p{
    font-size: 18px;
}
.hardest-level>*{
    margin-left: 15px;
}
.player-placement{
    color: rgba(255, 217, 0, 0.836);
}
.name-con{
    display: flex;
    justify-content: space-between;
    color: lightgray;
    font-family: Montserrat;
    margin-top: 30px;
}
.player-info-main{
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
    margin-top: 50px;
}
.player-placement-con, .player-points{
    background-color: #2e4268;
    border: 3px solid #172746;
    border-radius: 15px;
    height: 40px;
    padding-left: 5px;
    padding-right: 5px;
    font-family: Montserrat;
    color: lightgray;
    font-size: 14px;
    text-align: center;
    margin: 3px;
    padding: 20px;
    font-size: 20px;
    align-items: center;
    display: flex;
    width: 200px;
    justify-content: center;
}
.player-points{
    color: #b4c3e6;
}
.backBtn{
    width: 60px;
    height: 60px;
    border-radius: 7px;
    border: 0;
    font-size: 35px;
    font-family: Montserrat;
    cursor: pointer;
    background: #192c50;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    margin-top: 5px;
    border: 2px solid #334468;
    transition: 0.2s ease;
}
.backBtn:hover{
    background: #2a3d66;
}
.playerName{
    position: relative;
    left: -50%;
    transform: translateX(50%);
}
</style>