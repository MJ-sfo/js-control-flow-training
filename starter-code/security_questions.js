console.log("security_questions.js is loaded");
var securityQuestions = [];
securityQuestions = [{'Anne': "dogs"}, {'Tim': "coffee"}, {'Jen': "daughters"}];
for (var i = 0; i < securityQuestions.length; i++) {
  var name = Object.keys(securityQuestions)[i][0];
  console.log(`Please name what is ${name} favorite ?`);
  var concate = (`Please name what is ${name} favorite ?`);
	var person = prompt(concate);
}
