
function startQuiz(){
    // Get the username and start Quiz
    var getwrap = document.getElementById("wrapper");
    var getmain = document.getElementById("mainContent");
    getwrap.style.display = "none";
    getmain.style.display = "block";
}
var newQuestion = [
    {
        question : "Q1. What is the full form of CPU?",
        answer : "Central Processing Unit"
    },
    {
        question : " Q2. What is Capital of Pakistan?",
        answer : "Islamabad",
        options : [
            "Karachi",
            "Lahore",
            "Peshawer",
            "Islamabad"
        ]
    },
    {
        question : " Q3. What is the Prime Minister of Pakistan?",
        answer : "Imran Khan",
        options : [
            "Nawaz Sharif",
            "Imran Khan",
            "Zardari",
            "Altaf Hussain"
        ]             
    },
    {
        question : " Q4. What is the full form of HTML?",
        answer : "Hyper Text Markup Language",
        options : [
            "Hyper Text Markup Language",
            "Holding Text Manage Language",
            "Hyper Turtorial Manual Language",
            "None of these above"
        ]
    },
    {
        question : " Q5. What is full form of RAM?",
        answer : "Random Access Memory",
        options : [
            "Random Access Memory",
            "Regular Access Management",
            "Random Amount Manage",
            "None of these Above"
        ]
    }
  
]
var question_count = 1;
var name = name;
var score = 0;

function nextQuestion(){
    // Get heading input value list 
    var getheading = document.getElementById("heading");
    var get_li = document.getElementsByClassName("livalue");
    var get = document.getElementsByTagName("li");  
    
    // Changge question heading and list items and its value and checked
    getheading.innerHTML = newQuestion[question_count].question;
    for(var i=0; i<get_li.length; i++){
        // checking user click on which question
        var right = get_li[i].checked;
        if(right==true && get_li[i].value==newQuestion[question_count-1].answer){
            score = score+1;
            console.log(score)
        }    
    // Previouse all checked option convert to false
        get_li[i].checked = false;

        // change the previous name of input value
        get_li[i].name = newQuestion[question_count].options[0] ;

        // change the previous input value of question 
        get_li[i].value = newQuestion[question_count].options[i];

        // change the previous option 
        get[i].childNodes[2].nodeValue = newQuestion[question_count].options[i];
    }
    // console.log(question_count)
    question_count++;

    var questionlength = newQuestion.length;
    if(question_count == questionlength){
    var Next = document.getElementById("Next");
    var submit = document.getElementById("submit");
    submit.style.display = "inline";
    Next.disabled = true ;  
}

}

function result(){
    var get_li = document.getElementsByClassName("livalue");
    var getuser = document.getElementById("getuser");
    var getbtn = document.getElementById("username");
    var scorebtn = document.getElementById("score");
    var quesdiv = document.getElementById("final_content");
    var lastdiv = document.getElementById("final_result");
    var allques = document.getElementById("allques");

    quesdiv.style.display = "none";
    lastdiv.style.display = "block";

      for(var i=0; i<get_li.length; i++){
        // checking user click on which question
        var right = get_li[i].checked;
        if(right==true && get_li[i].value==newQuestion[question_count-1].answer){
            score = score+1;
            console.log(score)
        }  
    }
console.log(score)
    getbtn.innerHTML = getuser.value;
    allques.innerHTML = newQuestion.length;
    scorebtn.innerHTML = score;
 


   

}
