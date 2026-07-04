<script setup>

</script>

<template>
    <div class="mainInfo">
        <h1 align="center" class="siteName">GD Demonlist</h1>
        <div style="display: flex; justify-content: center;">
            <h2 align="center" style="max-width: 600px; margin-bottom: 60px;">Список сложнейших уровней в Geometry Dash, созданный с помощью Global Demonlist API</h2>
        </div>
    </div>
    <div class="info">
        <div class="mainCard">
            <h2 style="color: #A0AFD1">100,000+</h2>
            <b>Рекордов</b>
        </div>
        <div class="mainCard">
            <h2 style="color: #A0AFD1">1,700+</h2>
            <b>уровней</b>
        </div>
        <div class="mainCard">
            <h2 style="color: #A0AFD1">35,000+</h2>
            <b>игроков</b>
        </div>
    </div>
    <div class="btnContainer">
        <router-link to="/list">
            <button class="listBtn">Лист уровней</button>
        </router-link>
        <router-link to="/slayer">
            <button class="btn">Список лучших игроков</button>
        </router-link>
    </div>
</template>

<style scoped>
@keyframes anim{
    0%{
        opacity: 0;
        transform: translateY(80px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
}
.mainInfo{
    color: white;
    font-family: Montserrat;
    animation: anim 1.5s ease;
}
.siteName{
    color: #A0AFD1;
    text-shadow:
    0 0 15px #1a243b,
    0 0 15px #1a243b,
    0 0 25px #1a243b;
    margin-top: 50px;
    transition: 0.3s ease;
}
.siteName:hover{
    text-shadow:
    0 0 40px #1a243b,
    0 0 25px #2c3e68,
    0 0 15px #2c3e68;
}
.info{
    color: rgba(255,255,255, 0.5);
    font-family: Montserrat;
    text-align: center;
    animation: anim 1.75s ease;
}
.mainCard{
    display: inline-block;
    background: linear-gradient(#334b85, #111827);
    padding: 20px;
    border-radius: 20px;
    padding-top: 5px;
    border: 3px solid #1c273f;
    transition: 0.2s ease;
    margin-left: 15px;
    margin-right: 15px;
    width: 130px;
    height: 95px;
    cursor: pointer;
    font-size: 17px;
}
.mainCard:hover{
    border: 3px solid rgb(250, 59, 59);
    transform: scale(1.02);
}
.listBtn{
    border: 0;
    border-radius: 7px;
    width: 230px;
    height: 55px;
    color: white;
    background: linear-gradient(to right, #4273e6, #9153f3);
    cursor: pointer;
    box-shadow:
    0 0 15px #1a243b,
    0 0 15px #1a243b,
    0 0 15px #1a243b;
    transition: 0.3s ease;
    font-size: 15px;
    font-family: Montserrat;
}
.listBtn:hover{
    box-shadow:
    0 0 25px #1a243b,
    0 0 35px #1a243b,
    0 0 15px #1a243b;
}
.btnContainer{
    display: flex;
    justify-content: center;
    margin-top: 50px;
    gap: 35px;
    animation: anim 2s ease;
}
.btn{
    border: 0;
    border-radius: 7px;
    width: 270px;
    height: 55px;
    color: white;
    background: #2d4b92;
    cursor: pointer;
    transition: 0.25s ease;
    font-size: 15px;
    font-family: Montserrat;
}
.btn:hover{
    background: #263f7a;
}
</style>