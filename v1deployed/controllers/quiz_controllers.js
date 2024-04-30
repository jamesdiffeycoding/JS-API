const hardCodedQuestions = require("../data/users.json");
var fs = require('fs');

console.log(hardCodedQuestions);

async function getAllQuestions(req, res) {
  try {
    const response = hardCodedQuestions
    // const response = await res.json()
    return res.status(200).send({message: "All questions retrieved successfully", data: response});
  }
  catch (error) {
    return res.status(500).send({message: "Error retrieving questions", error: error});
  }
}

async function getQuestionById(req, res) {
  try {
    const response = hardCodedQuestions[req.params.id] 
    // const response = await res.json()
    return res.status(200).send({message: "Question with specified id retrived successfully", data: response});
  }
  catch (error) {
    return res.status(500).send({message: "Error retrieving questions with specified id", error: error});
  }
}

function createQuestion(req, res) {
//     userData.push(user);
//     fs.writeFileSync('../data/users.json', JSON.stringify(userData));
//     return user;
// }
  try {
    const response = hardCodedQuestions
    hardCodedQuestions.push({
      "Id": hardCodedQuestions.length - 1,
      "Question": req.body.Question,
      "AnswerA": req.body.AnswerA,
      "AnswerB": req.body.AnswerB,
      "TrueAnswer": req.body.TrueAnswer,
      // "Question": "What is CSS?",
      // "AnswerA": "Cascading Snake Style",
      // "AnswerB": "Cascading Style Sheets",
      // "TrueAnswer": "B"
    }
    )
    // const response = await res.json()
    return res.status(200).send({message: "Question with specified id retrived successfully", data: response});
  }
  catch (error) {
    return res.status(500).send({message: "Error retrieving questions with specified id", error: error});
  }
}

module.exports = {
    getAllQuestions: getAllQuestions,
    getQuestionById: getQuestionById,
    createQuestion: createQuestion
};