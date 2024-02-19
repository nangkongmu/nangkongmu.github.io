function showMoreInfo() {
    // 여기에 원하는 동작을 추가합니다.
    alert('더 자세한 정보를 보여줄 수 있습니다!');
}

// 현재 시간을 업데이트하는 함수
function updateCurrentTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    var currentTime = hours + ":" + minutes + ":" + seconds;

    // 현재 시간을 특정 위치에 표시
    document.getElementById('current-time').innerText = '현재 시간: ' + currentTime;
}

// 페이지가 로드될 때 현재 시간 업데이트
updateCurrentTime();

// 1초마다 현재 시간 업데이트
setInterval(updateCurrentTime, 1000);