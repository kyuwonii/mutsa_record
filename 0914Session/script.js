let emojiArr = ["🍔","🍖","🍚","🍕","🥗","🍜"];
let foodName = ["햄버거","고기","밥","피자","샐러드","국수"];

const btn = document.querySelector(".btn");
btn.addEventListener("click",
    function(){
        const index = Math.floor(Math.random() * emojiArr.length); //인덱스에 랜덤 넘버(이모지 길이)
        document.querySelector(".em").innerHTML = emojiArr[index]; //em에 이모티콘 삽입 html 요소에 접근하려면 document
        console.log(index);
        document.querySelector("h1").innerHTML = `오늘은 ${foodName[index]} 먹자!`; //오늘 뭐먹지 자리에 대치 innerHTML 바꾸고 싶은 내용 수정 가능하게 지정.
        console.log("log로 본인이 확인하고 싶은 것")
    });