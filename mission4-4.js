function omikujishow(){
var x = Math.random();
var message = "";
var color = "";
var comment = "";
var subcomment = "";

if(x <0.1){
    message = "大吉";
    color = "red";
    comment = "今日は何をしてもうまくいく！";
    subcomment = 
    "1.気になる人に自分から連絡してみる\n" +
    "2.今日は相手の反応がとても良い日！返事の確率アップ!\n" +
    "3. 笑顔で話しかけるとチャンスが広がるよ！";
} else if(x < 0.5){
    message= "中吉";
     color = "pink" ;
     comment = "気になる人に話しかけてみよう！";
      subcomment =
      "1. 軽い挨拶から始めよう\n" +
      "2. 相手の話をよく聞くと好印象\n" +
      "3. メッセージを送ると距離が縮まるよ";
} else{
    message = "小吉";
     color = "lightblue" ;
     comment = "自分を磨く日！！";
     subcomment =  "1. 好きな服やメイクを研究してみる\n" +
      "2. 気持ちをノートにまとめると◎\n" +
      "3. 落ち着いて過ごすと運気UP!";
}

var object = document.getElementById("omikuji");
object.innerText = message;
object.style.color = color;

var commentBox = document.getElementById("comment");
commentBox.innerText = comment;

var subcommentBox = document.getElementById("subcomment");
subcommentBox.innerText = subcomment;
}