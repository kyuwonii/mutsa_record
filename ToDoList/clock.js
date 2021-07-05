const clockContainer = document.querySelector(".clock-js");
const clockTitle =clockContainer.querySelector("h1"); //변수 가져오기

function getTime(){ //인터넷에서 시간을 가져와서 표기
    const date = new Date(); //이미 생성되어있는 객체 가져오기.

    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${ //inerText는 innerHTML과 거의 비슷, 값을 문자열로 가져옴.
        hours < 10 ? `0${hours}`:hours}:${ //3항조건연산자
            minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds // 초가 10초보다 적으면 앞에 0을 붙이고 작성
    }`;
} 


function init(){ // init 함수 안에서 만드는걸로 고정.
    getTime(); 
    setInterval(getTime, 1000);
}

init();