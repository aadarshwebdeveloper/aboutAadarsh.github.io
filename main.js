const question_db = [
{
  question: "Q1. what is aadarsh B'day month?",
  a: "january.",
  b: "february.",
  c: "april.",
  d: "march.",
  ans: "opt_4"
},
{
  question: "Q2. who is aadarsh's favorite cricketer?",
  a: "A B de viliiers.",
  b: "nathen lyon.",
  c: "MSD.",
  d: "Virat kohli.",
  ans: "opt_3"
},
{
  question: "Q3. which software is aadarsh's favorite?",
  a: "whatsapp.",
  b: "visual studio code.",
  c: "youtube.",
  d: "instagram.",
  ans: "opt_2"
},
{
  question: "Q4. which colour is aadarsh's favorite?",
  a: "red.",
  b: "blue.",
  c: "aqua.",
  d: "magenta.",
  ans: "opt_3"
},
{
  question: "Q5. which car is aadarsh's dream car?",
  a: "lamborghini.",
  b: "audi.",
  c: "roles royes.",
  d: "bugati.",
  ans: "opt_3"
},
{
  question: "Q6. what do aadarsh's like in free time?",
  a: "reading books.",
  b: "watching movie.",
  c: "shopping.",
  d: "walking.",
  ans: "opt_2"
},
{
  question: "Q7. which drink is aadarsh's favorite drink?",
  a: "soft drink.",
  b: "tea.",
  c: "coffee.",
  d: "water.",
  ans: "opt_1"
},
{
  question: "Q8. what is more important for aadarsh?",
  a: "money.",
  b: "love.",
  c: "family.",
  d: "carrier.",
  ans: "opt_3"
},
{
  question: "Q9. which is the dream job of aadarsh?",
  a: "collector.",
  b: "coder.",
  c: "chicken cutter.",
  d: "teacher.",
  ans: "opt_2"
},
{
  question: "Q10. which is the favorite movie of aadarsh?",
  a: "ddlj.",
  b: "dangal.",
  c: "vivegam.",
  d: "dear comrade.",
  ans: "opt_4"
}


];

alert("Answer the funny questions, and don't forgot  to share the screenshot of your result.😉");

let question = document.getElementById("question");

let opt_1 =  document.getElementById("opt_text_1");

let opt_2 =  document.getElementById("opt_text_2");
let opt_3 =  document.getElementById("opt_text_3");
let opt_4 =  document.getElementById("opt_text_4");
let btn = document.getElementById("btn");

let options = document.querySelectorAll(".options");

let points = document.getElementById("points");


let points_div = document.querySelector(".score_div");

let i = 0;
let score = 0;

function loadquiz(){
  
  
let quiz_list = question_db[i];
  
  
question.innerText = quiz_list.question;

opt_1.innerText = quiz_list.a;

opt_2.innerText = quiz_list.b;

opt_3.innerText = quiz_list.c;

opt_4.innerText = quiz_list.d;
}

loadquiz();


const check = () => {
  let answer;
  options.forEach((crntAnsElem) => {
    if (crntAnsElem.checked) {
      answer = crntAnsElem.id;
    }
    
    crntAnsElem.checked = false;
  });
  
  let x = 0;
  
  if(answer == question_db[i].ans){
    score++;
  }
    i++;
    
  if(i < question_db.length){
    
   loadquiz();
    
  }
  else{
    points.innerText = `🎉You Scored ${score}/${question_db.length} 🎉`;

    points_div.classList.remove("score_div");
    points_div.classList.add("show");
  }
  return answer;
};

    console.log(i);