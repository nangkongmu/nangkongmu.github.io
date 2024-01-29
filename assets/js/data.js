
//api를 읽어오는 코드
/*
const fetchInfo = function(){
    return fetch("url!!").then(
        (response) => {
            if(response.ok){
                return response.json();
            }else {
                return console.error('responsne error');
            }

            }
    );
};*/

//엑셀파일 읽어오는 코드
/*function readExcel(){
    let input = event.target;
    let reader = new FileReader();

    reader.onload = function(){
        let data = reader.result;
        let workBook = XLSX.read(data, {type:'binary'});//2진데이터를 워크북 객체로 얻어온다.

        workBook.SheetNames.forEach(function(sheetName){
            console.log('SheetName: ' + sheetName);

            let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
            console.log(JSON.stringify(rows));
        })

    };
    reader.readAsBinaryString(input.files[0]);

}*/

const broadcasttime = parseFloat(prompt('방송시간을 입력하세요 >> '));
const time_ranges = [15, 14, 12, 11, 9, 7, 4, 2, 1];
const time_scores = [9, 13.5, 18, 22.5, 31.5, 40.5, 45, 40.5, 22.5, 0];
let timescore = 0;
//prompt는 문자열을 입력할때 사용한다.

for (let i = 0; i < time_ranges.length; i++) {
    if (broadcasttime >= time_ranges[i]) {
        timescore = time_scores[i-1];
        break;
    }
}

const avgviewer = parseFloat(prompt('평균 시청자를 입력하세요 >> '));
const score_ranges = [5, 10, 20, 30, 40, 50, 60, 80, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000, 4000, 8000];
const avgscore = Math.min(

    score_ranges.findIndex(range_val => avgviewer < range_val) + 1 || 20, 20);

let grade;
if(avgscore == 1){
    grade = 'F';
}
else if(avgscore == 2){
    grade = 'F+';
}
else if(avgscore == 3){
    grade = 'E';
}
else if(avgscore == 4){
    grade = 'E+';
}
else if(avgscore == 5){
    grade = 'D-';
}
else if(avgscore == 6){
    grade = 'D';
}
else if(avgscore == 7){
    grade = 'D+';
}
else if(avgscore == 8){
    grade = 'C-';
}
else if(avgscore == 9){
    grade = 'C';
}
else if(avgscore == 10){
    grade = 'C+';
}
else if(avgscore == 11){
    grade = 'B-';
}
else if(avgscore == 11){
    grade = 'B';
}
else if(avgscore == 12){
    grade = 'B+';
}
else if(avgscore == 13){
    grade = 'A-';
}
else if(avgscore == 14){
    grade = 'A';
}
else if(avgscore == 15){
    grade = 'A+';
}
else if(avgscore == 16){
    grade = 'S';
}
else if(avgscore == 17){
    grade = 'S+';
}
else if(avgscore == 18){
    grade = 'S++';
}

const maxviewer = parseInt(prompt('최대 시청자를 입력하세요 >> '));
const ranges = [
    [0, 10], [10, 20], [20, 40], [40, 60], [60, 80],
    [80, 100], [100, 120], [120, 160], [160, 200],
    [200, 300], [300, 400], [400, 600], [600, 1000],
    [1000, 1800], [1800, 3700], [3700, 5000], [5000, 7500],
    [7500, 12000], [12000, 23000], [23000, Infinity]
];//2중배열
let maxscore;
let maxgrade;

for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    if (maxviewer < end) {
        maxscore = i + 1;
        break;
    }
}
if(maxscore == 1){
    maxgrade = 'F';
}
else if(maxscore == 2){
    maxgrade= 'F+';
}
else if(maxscore == 3){
    maxgrade = 'E';
}
else if(maxscore == 4){
    maxgrade = 'E+';
}
else if(maxscore == 5){
    maxgrade = 'D-';
}
else if(maxscore == 6){
    maxgrade = 'D';
}
else if(maxscore == 7){
    maxgrade = 'D+';
}
else if(maxscore == 8){
    maxgrade = 'C-';
}
else if(maxscore == 9){
    maxgrade= 'C';
}
else if(maxscore == 10){
    maxgrade = 'C+';
}
else if(maxscore == 11){
    maxgrade = 'B-';
}
else if(maxscore == 12){
    maxgrade = 'B';
}
else if(maxscore == 13){
    maxgrade = 'B+';
}
else if(maxscore == 14){
    maxgrade = 'A-';
}
else if(maxscore == 15){
    maxgrade = 'A';
}
else if(maxscore == 16){
    maxgrade = 'A+';
}
else if(maxscore == 17){
    maxgrade = 'S';
}
else if(maxscore == 18){
    maxgrade = 'S+';
}
else if(maxscore == 19){
    maxgrade = 'S++';
}

const broadcasthits = parseFloat(prompt('생방송 조회수를 입력하세요 >> '));
const multipliers = [1.05, 1.1, 1.15, 1.2, 1.3,1.5,1.8,2.3,3];
let hitsscore = 0;

for (let i = 0; i < multipliers.length; i++) {
    const multiplier = multipliers[i];
    if (avgviewer * multiplier >= broadcasthits && broadcasthits > avgviewer * (multiplier - 0.2)) {
        //if 평균시청자 * 1.2 이 조회수보다크거나같거나 *1.0조회수보다 클때
        hitsscore = (i + 1) * 3.2;
        break;
    }
}

if (!hitsscore) {
    hitsscore = broadcasthits > avgviewer * multipliers[multipliers.length - 1] ? 32 : 0;
}

const followernow = parseInt(prompt('현재 팔로워 수를 입력하세요 >> '));
const followerbefore = parseInt(prompt('어제 팔로워 수를 입력하세요 >> '));
const followerup = (followernow - followerbefore)/followerbefore * 100 
let followerscore, fupscore;

if (followernow == 0) {
    followerscore = 0;
    fupscore = 0;
} else {
    if (followernow >= 1 && followernow <= 100) {
        followerscore = 0;
        if (followerup < -50) {
            fupscore = 0;
        } else if (followerup >= -50 && followerup < -30) {
            fupscore = 3.3;
        } else if (followerup >= -30 && followerup < -10) {
            fupscore = 6.6;
        } else if (followerup >= -10 && followerup <= 50) {
            fupscore = 9.9;
        } else if (followerup > 50 && followerup <= 100) {
            fupscore = 13.2;
        } else if (followerup > 100 && followerup <= 300) {
            fupscore = 16.5;
        } else if (followerup > 300) {
            fupscore = 20;
        }
    } else if (followernow >= 101 && followernow <= 1000) {
        followerscore = 1;
        if (followerup < -50) {
            fupscore = 0;
        } else if (followerup >= -50 && followerup < -30) {
            fupscore = 3.3;
        } else if (followerup >= -30 && followerup < -10) {
            fupscore = 6.6;
        } else if (followerup >= -10 && followerup <= 10) {
            fupscore = 9.9;
        } else if (followerup > 10 && followerup <= 30) {
            fupscore = 13.2;
        } else if (followerup > 30 && followerup <= 50) {
            fupscore = 16.5;
        } else if (followerup > 50) {
            fupscore = 20;
        }
    } else if (followernow >= 1001 && followernow <= 10000) {
        followerscore = 2;
        if (followerup < -50) {
            fupscore = 0;
        } else if (followerup >= -50 && followerup < -30) {
            fupscore = 3.3;
        } else if (followerup >= -30 && followerup < -10) {
            fupscore = 6.6;
        } else if (followerup >= -10 && followerup <= 10) {
            fupscore = 9.9;
        } else if (followerup > 10 && followerup <= 30) {
            fupscore = 13.2;
        } else if (followerup > 30 && followerup <= 50) {
            fupscore = 16.5;
        } else if (followerup > 50) {
            fupscore = 20;
        }
    } else if (followernow > 10000) {
        followerscore = 3;
        if (followerup <= -50) {
            fupscore = 0;
        } else if (followerup > -50 && followerup <= -30) {
            fupscore = 3.3;
        } else if (followerup > -30 && followerup <= -20) {
            fupscore = 6.6;
        } else if (followerup > -20 && followerup <= -10) {
            fupscore = 9.9;
        } else if (followerup > -10 && followerup <= 15){
            fupscore = 13.2;
        }else if (followerup > 15 && followerup <= 30){
            fupscore = 16.5;
        }else if (followerup > 30){
            fupscore = 20;
        }
    }
}

const sum = timescore + hitsscore + fupscore;

let textColor;
if(avgscore >=16 && avgscore <= 18){
    textColor = 'red';
}else if(avgscore >= 13 &&avgscore<=15){
    textColor = 'blue'
}else{
    textColor = 'green';
}
console.log(`당신의 점수는: ${sum} ${grade} ${maxgrade}`);

const resultElement = document.createElement('div');
  resultElement.id = 'result';
  resultElement.innerText = `당신의 점수는: ${sum} ${grade} ${maxgrade}`;
  resultElement.style.color = textColor;
  document.body.appendChild(resultElement);
