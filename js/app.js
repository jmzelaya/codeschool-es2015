// *let* vairables are scoped ot the nearest block and are NOT hoisted.
// A block of code is any code section within curly braces like if, else, for, while, etc.

//1.2 Refacotring to let
/* function loadProfiles(userNames){
  var message = "Loading " + userNames.length + " user(s)";

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    var profiles = data.profiles;
    _addToPage(profiles);
  });
} */


function loadProfiles(userNames){
  let message = "Loading " + userNames.length + " user(s)";

  _displayFlash(message);

  _fetchProfiles(userNames, function(data){
    let profiles = data.profiles;
    _addToPage(profiles);
  });
}

//1.3 Moving Variable Declarations

/* Using let instead of var prevents variable declarations from
being moved to the top of the scope on what is known as: */

//ANS: Hoisting



//✍🏼 Using let in for loops -> With let, there is no sharing in for loops.
// A new variable is created on each iteration.
//✍🏼 let Cannot be redeclared -> Variables declared with let can be reassigned,
//BUT cannot be redeclared within the same scope.
//Ex. (reassignment) ✅ let greeting = "hello"; greeting = "goodbye";
//Ex. (redeclared) ⛔️ let greeting = "hello"; let greeeting = "goodbye";
