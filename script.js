const question1 = {
    question: "what is the answer?",
    choices: ["A", "B", "C", "D"],
    answer: "B"
};
const question2 = {
    question: "what is the answer?",
    choices: ["A", "B", "C", "D"],
    answer: "D"
};
const question3 = {
    question: "what is the answer?",
    choices: ["A", "B", "C", "D"],
    answer: "A"
};

document.getElementById("question").innerText = question1.question;
document.getElementById("choice1").innerText = question1.choices[0];
document.getElementById("choice2").innerText = question1.choices[1];
document.getElementById("choice3").innerText = question1.choices[2];
document.getElementById("choice4").innerText = question1.choices[3];
