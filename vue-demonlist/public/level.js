let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

async function getLevel(){
    const promise = await fetch(`https://api.demonlist.org/level/classic/get?id=${id}`);
    const data = await promise.json();
    console.log(data);

    const name = document.getElementById('name');
    const placement = document.getElementById('placement');
    const videoCon = document.getElementById('videoContainer');
    const verifier = document.getElementById('verifier')
    const totalPoint = document.getElementById('totalPoint');
    const listPoint = document.getElementById('listPoint');
    const gameV = document.getElementById('gameVersion');
    const objects = document.getElementById('objects');
    const ingameID = document.getElementById('ingameID');
    const listPercent = document.getElementById('listPercent');

    placement.textContent = `#${data.data.placement}`
    name.textContent = `${data.data.name} By ${data.data.holder}`;
    verifier.textContent = `verifier: ${data.data.verification.username}`
    totalPoint.textContent = `Total Point: ${data.data.points}`;
    listPoint.textContent = `List Point: ${data.data.points / 4}`;
    gameV.textContent = `Version: ${data.data.game_version}`;
    objects.textContent = `Objects: ${data.data.objects}`;
    ingameID.textContent = `ID: ${data.data.ingame_id}`
    listPercent.textContent = `List %: ${data.data.list_percent}`
    const videoPromise = await fetch(`https://api.microlink.io?url=${data.data.verification.video_url}&iframe=true`);
    const videoData = await videoPromise.json();
    videoCon.innerHTML = videoData.data.iframe.html;
    const video = document.querySelector('iframe');
    video.className = 'video';
}

getLevel();