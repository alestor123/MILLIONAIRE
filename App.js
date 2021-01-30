var axios = require('axios');
module.exports = async () => {
var data = await axios.get('https://opentdb.com/api.php?amount=1&category=9&type=multiple')
return {
category:data.data.results[0].category,
difficulty:data.data.results[0].difficulty,
question:data.data.results[0].question,
options : Options(data.data.results[0].correct_answer,data.data.results[0].incorrect_answers),
correct:data.data.results[0].correct_answer,
}
}
function Options(correct,incorrect) {
incorrect.push(correct)
return incorrect.sort(() => Math.random() - 0.5)
}