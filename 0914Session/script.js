let emojiArr = ["๐","๐","๐","๐","๐ฅ","๐"];
let foodName = ["ํ๋ฒ๊ฑฐ","๊ณ ๊ธฐ","๋ฐฅ","ํผ์","์๋ฌ๋","๊ตญ์"];

const btn = document.querySelector(".btn");
btn.addEventListener("click",
    function(){
        const index = Math.floor(Math.random() * emojiArr.length); //์ธ๋ฑ์ค์ ๋๋ค ๋๋ฒ(์ด๋ชจ์ง ๊ธธ์ด)
        document.querySelector(".em").innerHTML = emojiArr[index]; //em์ ์ด๋ชจํฐ์ฝ ์ฝ์ html ์์์ ์ ๊ทผํ๋ ค๋ฉด document
        console.log(index);
        document.querySelector("h1").innerHTML = `์ค๋์ ${foodName[index]} ๋จน์!`; //์ค๋ ๋ญ๋จน์ง ์๋ฆฌ์ ๋์น innerHTML ๋ฐ๊พธ๊ณ  ์ถ์ ๋ด์ฉ ์์  ๊ฐ๋ฅํ๊ฒ ์ง์ .
        console.log("log๋ก ๋ณธ์ธ์ด ํ์ธํ๊ณ  ์ถ์ ๊ฒ")
    });