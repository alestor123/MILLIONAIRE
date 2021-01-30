#!/usr/bin/env node

var quiz = require('./App'),
select = require('cli-select'),
chalk = require('chalk');

(async () => {
var data = await quiz();
console.log(chalk.cyanBright.bold(data.question))
var ans = await select({values: data.options,});
if(data.correct==ans.value) console.log(chalk.yellowBright.bold('🎉🎉 Correct Good Job 🎉🎉'))
else console.log(chalk.redBright.bold(`The Answer ${ans.value} is Wrong`) + chalk.greenBright('\nThe Correct Answer Is : ')+chalk.greenBright.bold(data.correct) + chalk.green('\nTry Next Time'))
})();