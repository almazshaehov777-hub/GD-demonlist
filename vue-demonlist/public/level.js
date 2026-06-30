let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get('id');

function goToYoutube(url){
    window.location.href = url;
}

async function getLevel(){
    const promise = await fetch(`https://api.demonlist.org/level/classic/get?id=${id}`);
    const data = await promise.json();

    const responseImage = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(data.data.verification.video_url)}`);
    const dataImage = await responseImage.json();
    const imageUrl = dataImage.thumbnail_url;

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
    const image = document.getElementById('image');
    const TR = document.getElementById('TR');
    const CR = document.getElementById('CR');

    placement.textContent = `#${data.data.placement}`
    name.textContent = `${data.data.name} By ${data.data.holder}`;
    verifier.textContent = `verifier: ${data.data.verification.username}`
    totalPoint.textContent = `Total Point: ${data.data.points}`;
    listPoint.textContent = `List Point: ${data.data.points / 4}`;
    gameV.textContent = `Version: ${data.data.game_version}`;
    objects.textContent = `Objects: ${data.data.objects}`;
    ingameID.textContent = `ID: ${data.data.ingame_id}`
    listPercent.textContent = `List %: ${data.data.list_percent}`
    image.src = imageUrl;


    const promiseRecord = await fetch(`https://api.demonlist.org/level/classic/record/list?level_id=${data.data.id}`);
    const dataRecord = await promiseRecord.json();
    console.log(dataRecord);

    const recordCon = document.getElementById('record');
    let html = '';
    if(dataRecord.data.records.length != 0){
        for(let i = 0; i<dataRecord.data.records.length; ++i){
            const record = dataRecord.data.records[i];
            html += `
            <div class="record" onclick="goToYoutube('${record.video_url}')">
                <p class="playerName">${record.user.username}</p>
                <p class="percent">${record.percent}%</p>
            </div>
        `
        }  
    }else{
        html = `
            <h2 class="noRecord" align="center">🏆 Пока нет рекордов</h2>
        `
    }
    TR.textContent = `Total records: ${dataRecord.data.total_count}`
    CR.textContent = `100% complete: ${dataRecord.data.completed_count}`
    recordCon.innerHTML = html;
}

getLevel();