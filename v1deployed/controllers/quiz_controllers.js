const userData = require("../data/users.json");
var fs = require('fs');


const questionObject = [
    {
      "Id": 0,
      "Question": "What is an API?",
      "Answer A": "Apple packaging igloo",
      "Answer B": "Application programming interface",
      "True Answer": "B"
    },
    {
      "Id": 1,
      "Question": "What is REST?",
      "Answer A": "Sitting in the woods",
      "Answer B": "Representational state transfer",
      "True Answer": "B"
    },
    {
      "Id": 2,
      "Question": "What is Git?",
      "Answer A": "A slang term for a silly person",
      "Answer B": "A distributed version control system",
      "True Answer": "B"
    },
    {
      "Id": 3,
      "Question": "What is HTML?",
      "Answer A": "A type of metal",
      "Answer B": "Hypertext Markup Language",
      "True Answer": "B"
    },
    {
      "Id": 4,
      "Question": "What is CSS?",
      "Answer A": "Cascading Snake Style",
      "Answer B": "Cascading Style Sheets",
      "True Answer": "B"
    }
  ]
  
console.log(questionObject);

 async function getAllQuestions(req, res) {
    const response = questionObject
    // const response = await res.json()
    return res.status(200).send({message: "All questions retrieved successfully", data: response});
}



function getUserbyId(ID) {
    return userData[ID];
}

function createQuestion(user) {
    userData.push(user);
    fs.writeFileSync('../data/users.json', JSON.stringify(userData));
    return user;
}

module.exports = {
    getAllQuestions: getAllQuestions
};