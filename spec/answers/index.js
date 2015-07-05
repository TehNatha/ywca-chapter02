/*---------------------    EXPRESSIONS AND STATEMENTS    ---------------------*/

// Expressions 1
// Make the function return a nested expression (use parentheses) whose
// evaluated value is not undefined.
Exer.expressions1 = function () {

  return ( 1 + 2 ) * 3 ;

};

/* jshint ignore:start */
// Statements 1
Exer.statements1 = function () {

  // 5 == true;  // pre-JSHint
  // 5 === true;  // pre-JSHint
  // var yo = true; // pre-JSHint (fails test)
  Math.min( 1, 2 );

};
/* jshint ignore:end */

/*-----------------------------    VARIABLES    ------------------------------*/

// Variables 1
Exer.variables1 = function () {

  // Write a statement that declares a variable.
  var foo;

  // Return that variable.
  return foo;

};

// Variables 2
Exer.variables2 = function () {

  // Write a statement that declares a variable.
  var foo;

  // Write a statement to assign a number value to your variable.
  foo = 3;

  // Return the variable.
  return foo;

};

// Variables 3
Exer.variables3 = function () {

  // Write a statement that declares a variable and initializes it to a string.
  var foo = "23";

  // Return the variable.
  return foo;

};

// Variables 4
Exer.variables4 = function ( n ) {

  // Return the parameter.
  return n;

};

// Variables 5
Exer.variables5 = function ( n ) {

  // Declare a new variable and initialize it to the value of `n`.
  var foo = n;

  // Return the new variable.
  return foo;

};

// Variables 6
Exer.variables6 = function ( stacys ) {

  // You have 3 apples
  // (declare a variable named `apples` and initialize it to `3`)
  var apples = 3;

  // Stacy gives you more apples
  // (the parameter `stacys`)
  apples += stacys;

  // Return the total number of apples you have.
  return apples;

};

// Variables 7
// You have a certain amount of pocket change given by the parameter provided
Exer.variables7 = function ( change ) {

  // You find a quarter.
  change += 0.25;

  // Then you spend a dime on old fashioned candy.
  // How much money do you have now?
  change -= 0.1;

  // Use type coercion to turn your pocket change into a string add a dollar
  // sign to the beginning.
  change = "$" + change;

  // Return that string.
  return change;

};


/*--------------------    KEYWORDS AND RESERVED WORDS    ---------------------*/

// Keywords 1
// Uncomment the following function by removing the slash-asterisk pairs.
// Fix the function so no keywords or reserved words are improperly used.
Exer.keywords1 = function ( tue, two ) {
  var newt = 2;
  var cronst = two+2;
  tue += "2";
  var func = newt + cronst + tue + two;
  return func;
};

/*--------------------------    THE ENVIRONMENT    ---------------------------*/

// Enviroment 1
// Uncomment the line that does not return an evironment variable.
Exer.environment1 = function () {

  // return window;
  // return document;
  // return history;
   return browser;
  // return navigator;

};

/*------------------------------    FUNCTIONS    -----------------------------*/

// Functions 1
// Call setPowerLevel and pass it a value over 9000.
// Call cornTortilla and pass it the values "chicken", "queso", "bacon", and
// "lime".
Exer.functions1 = function (recombobulate, setPowerLevel, cornTortilla) {

  recombobulate();
  setPowerLevel( 9999 );
  cornTortilla( "chicken", "queso", "bacon", "lime" );

};


/*----------------------    THE CONSOLE.LOG FUNCTION    ----------------------*/

// Console 1
Exer.console1 = function () {

  // Output something to the console.
  console.log("Hello, world!");

};

// Console 2
Exer.console2 = function ( printme ) {

  // Print the parameter `printme` to the console.
  console.log( printme );

};

// Console 3
// Use the provided parameter `data` and string concatenation to output
//     The magic word is "xxxxx"
// to the console, where the `xxxxx` is the value provided in `data`. Do not
// change the value of the variable `data`.
Exer.console3 = function ( data ) {

  // your answer here
  console.log( 'The magic word is "' + data + '"' );

};

// Console 4
Exer.console4 = function () {

  // Use comma-separated values to output two things to the console with one
  // call.
  console.log("this", "that");

};

// Console 5
// Do not change the value of the variable `y`.
Exer.console5 = function ( x, y ) {

  // Output the first parameter `x` to the console.
  console.log(x);

  // Make the function return the parameter `y` plus 1.
  return y + 1;

};

/*---------------------------    RETURN VALUES    ----------------------------*/

// Return 1
// Call and log out the result of `magicFunc`.
Exer.return1 = function () {

  console.log( magicFunc() );

};

// Return 2
// Call and return the result of `magicFunc`.
Exer.return2 = function () {

  return magicFunc();

};

// Return 3
Exer.return3 = function () {

  // Call `strShift` with the argument "abczABCZ". Log the result.
  var answer = strShift("abczABCZ");
  console.log( answer );

  // Return that same result with "123" concatenated to the end.
  return answer + "123";

};

// Return 4
// Log the result of the string concatenation of two separate calls to
// `magicFunc`.
Exer.return4 = function () {

  console.log( magicFunc() + "" + magicFunc() );

};

// Return 5
// Shift the string "abcABC123!@#" with strShift.
// Shift the string "a S d F j K l" with strShift twice.
// Return the result of these two shifted strings passed into `strShuffle` with
// the first string as the first argument and the second string as the second
// argument.
Exer.return5 = function () {

  // Declare and initialize a variable for the first string.
  var str1 = strShift( "abcABC123!@#" );

  // Declare and initialize a variable for the second string.
  var str2 = strShift( "a S d F j K l" );

  // A return statement.
  return strShuffle( str1, strShift(str2) );

};

/*-------------------------    PROMPT AND CONFIRM    -------------------------*/

// Prompt 1
// Call prompt with the string and return the result.
Exer.prompt1 = function () {

  return prompt( 'What is the answer to the meaning of life, the universe, and everything?' );

};

// Confirm 1
// Call confirm with the string and return the result.
Exer.confirm1 = function () {

  return confirm( 'Imma let you finish, but Javascript is one of the best programming languages of all time...one of the best programming languages of all time!' );

};

/*----------------------------    CONTROL FLOW    ----------------------------*/

// Control 1
Exer.control1 = function () {

  // Use prompt to get a number from a user
  var num = prompt( "Please input a number." );

  // Print that number to the console
  console.log( num );

};

// Control 2
Exer.control2 = function ( bar ) {

  // Declare a variable named `foo`.
  var foo;

  // Initialize `foo` with a string.
  foo = "a string";

  // Log `foo` to the console.
  console.log( foo );

  // Concatenate the parameter `bar` to be beginning and end of `foo`
  // Save the result in a new variable called `ding`.
  var ding = bar + foo + bar;

  // Call `strReverse` and pass it `ding` (as an argument).
  // Send the result to the user in a confirm window.
  // Save the user's response in a new variable called `quux`.
  var quux = confirm( strReverse( ding ) );

  // Return the opposite of `quux`.
  return !quux;

};

/*-----------------------    CONDITIONAL EXECUTION    ------------------------*/

// Conditional 1
// Expect `isSerious` to be a boolean
Exer.condition1 = function ( isSerious ) {

  console.log( "Welcome to Camelot!" );

  // If `isSerious` is false, output the message:
  //     On second thoughts, let's not go to Camelot. It is a silly place.
  if ( isSerious === false ) {
    console.log( "On second thoughts, let's not go to Camelot. It is a silly place." );
  }

};

// Conditional 2
// Expect `temperature` to be a number
Exer.condition2 = function ( temperature ) {

  // If temperature is greater than or equal to 70
  if ( temperature >= 70 ) {
    // Then output:
    //     Hermit crab warning!
    console.log( "Hermit crab warning!" );
  }

  // Otherwise, output
  //     Catch of the day: influenza, $14/lb.
  else {
    console.log( "Catch of the day: influenza, $14/lb." );
  }

  // In either case, also print
  //     Thanks for visiting Pier One and Three Quarters!
  console.log( "Thanks for visiting Pier One and Three Quarters!" );

};

// Conditional 3
// Expect `whatDay` to be a string
Exer.condition3 = function ( whatDay ) {

  // Declare and initialize `luckyNumber`
  var luckyNumber = 7;

  // If the length of `whatDay` is 6 or less...
  if ( whatDay.length <= 6 ) {
    luckyNumber += '!';
  }

  // If `whatDay` is "Mannersday"...
  if ( whatDay === "Mannersday" ) {
    luckyNumber += 4;
  }
  // If `whatDay` is "Foosday"...
  else if ( whatDay === "Foosday" ) {
    luckyNumber += 2;
  }
  // If `whatDay` is "Heyday"...
  else if ( whatDay === "Heyday" ) {
    luckyNumber += luckyNumber.charAt(0);
  }
  // Otherwise...
  else {
    luckyNumber = Infinity;
  }

  // Return `luckyNumber`
  return luckyNumber;

};

// Conditional 4
Exer.condition4 = function () {

  // Prompt the user
  var input = prompt( "Enter today's date, please." );

  // If the user's input is not a number...
  if ( isNaN(input) ) {
    console.log( "What do you think this is, bub? Wonderland?" );
  }
  // Otherwise...
  else {
    // If the user's input is less than 1...
    if ( input < 1 ) {
      console.log( "Negativelaaaaaaand~!" );
    }
    // If the user's input is greater than 31...
    else if ( input > 31 ) {
      console.log( "Are they paying you overtime for this?" );
    }
    // If the user's input between 29 and 31, inclusive...
    else if ( input >= 29 && input <= 31 ) {
      console.log( "I sure hope it isn't February." );
    }
    // Otherwise...
    else {
      console.log( "Did you know? There are exactly " + input + " ways to make today awesome!" );
    }
  }

};

/*----------------------    WHILE AND DO WHILE LOOPS    ----------------------*/

// While 1
// Turn the code in the function into a while loop.
Exer.while1 = function () {

  var sheep = 10;
  while ( sheep > 0 ) {
    console.log( sheep-- + " sheep" );
  }

};

/* jshint ignore:start */
// While 2
// Recreate the code in the function without a loop
Exer.while2 = function () {

  console.log("I'm melting!");
  console.log("m melting!");
  console.log("melting!");
  console.log("lting!");
  console.log("ing!");
  console.log("g!");
  console.log("What a world!");

};
/* jshint ignore:end */

// doWhile 1
// Turn the code in the function into a single do while loop.
// Hint: 0, 1, and 2 are remainders from dividing numbers by 3.
Exer.doWhile1 = function () {

  var i = 0;
  do {
    console.log( i++ % 3 );
  } while ( i < 6 );

};

/* jshint ignore:start */
// doWhile 2
// Recreate the code in the function without a loop
Exer.doWhile2 = function () {

  console.log("Train# 1: In flight!?");
  console.log("Train# 2: In flight!?");
  console.log("Train# 3: In flight!?");
  console.log("Train# 4: In flight!?");
  console.log("Train# 5: In flight!?");
  console.log("Train# 6: In flight!?");
  console.log("Train# 7: In flight!?");

};
/* jshint ignore:end */

/*---------------------------    INDENTING CODE    ---------------------------*/

// Indenting 1
// Correctly indent the following code block using TWO spaces for each block
Exer.indenting1 = function() {

  var firstName = "Zachery";
  var lastName = "Moneypenny";
  if(firstName === "Zachery") {
    lastName = "Johnson";
  }

};

// Indenting 2
// Correctly indent the following code block using FOUR spaces for each block
Exer.indenting2 = function() {

    var firstName = "Penny";
    var lastName = "Moneywhistle";
    if(firstName === "Penny") {
        lastName = "Johnson";
    }
    
};

/*-----------------------------    FOR LOOPS    ------------------------------*/

// For 1
// Rewrite the loop as a linear sequence of statements.
Exer.for1 = function () {

  console.log( "..." );
  console.log( "    ...AA" );
  console.log( "        ...AAAA" );
  console.log( "            ...AAAAAA" );
  console.log( "                ...AAAAAAAA" );
  console.log( "                    ...AAAAAAAAAAH!" );

};

/* jshint ignore:start */
// For 2
// Rewrite the repetative code with for loops.
Exer.for2 = function () {

  for ( var i = 0; i < 2; i++ ) {
    console.log( "Hi!" );
    for ( var j = 0; j < 3; j++ ) {
      console.log( "My name is" );
    }
    console.log( "Slim Shady" );
  }

};
/* jshint ignore:end */

// For 3
// Write a loop that counts backwards from 20 to 5 and prints the number and
// "even" if the number is even and "odd" if the number is odd.
Exer.for3 = function () {

  for ( var i = 20; i >= 5; i-- ) {
    if ( i % 2 === 0 ) { console.log( i, "even" ); }
    else { console.log( i, "odd" ); }
  }

};

/*-----------------------    BREAKING OUT OF A LOOP    -----------------------*/

// Breaking 1
// Use a break to stop this infinite loop
Exer.breaking1 = function(yeng) {

  while(yeng()) {
    break;
  }

};

// Breaking 2
// Every time theatre.next() is called it returns a string, break when that string is
// "Electric Boogaloo!"
Exer.breaking2 = function(theatre) {

  while (theatre.next()) {
    console.log(theatre.current());
    if ( theatre.current() === "Electric Boogaloo!" ) { break; }
  }

};

/*-------------------    UPDATING VARIABLES SUCCINCTLY    --------------------*/

// Succinct 1
Exer.succinct1 = function ( kiwis ) {

  // Quintuple kiwis.
  kiwis *= 4;

  // Reduce kiwis by 2.
  kiwis -= 2;

  // Halve kiwis.
  kiwis /= 2;

  // Concatenate " handsomely hirsute kiwis" to kiwis.
  kiwis += " handsomely hirsute kiwis";

  // Return kiwis.
  return kiwis;

};

// Succinct 2
// Edit the for loop to use the incrementation operator.
Exer.succinct2 = function () {

  for ( var hippo = 2; hippo <= 10; hippo++ ) {
    console.log( hippo + "! " + hippo + " fluttering hippos! Ah ah ah ah ah!" );
  }

};

// Succinct 3
// Correct the decrementation operator error.
Exer.succinct3 = function () {

  var message = "Reverse me!";
  var pointer = message.length;
  while( pointer > 0 ) {
    console.log( message.charAt( --pointer ) );
  }

};

/*-----------------    DISPATCHING ON A VALUE WITH SWITCH    -----------------*/

// Switch 1
Exer.switch1 = function ( animal ) {

  var output = 'The ' + animal + ' goes "';

  // Create a switch that dispatches on the parameter `animal`.
  // In each case, concatenate the correct response to end of the `output`
  // string.
  switch( animal ) {

    // "cow": "foo"
    case 'cow':
      output += 'foo';
      break;

    // "sheep": "bar"
    case 'sheep':
      output += 'bar';
      break;

    // "duck": "quux"
    case 'duck':
      output += 'quux';
      break;

    // default: "ring-a-ding-ding-dingding-ding-a-ding-ding"
    default:
      output += 'ring-a-ding-ding-dingding-ding-a-ding-ding';
      break;
  }

  output += '"!';
  console.log( output );

};

/*---------------------------    CAPITALIZATION    ---------------------------*/

/* jshint ignore:start */
Exer.capitalization1 = function() {

  var zero = 0;
  var happyCat = new String("How did this get here! I'm not good at computer!");
  for (var index = 0; i < happyCat.length; index++) {
    if (index % 4 === zero) {
      console.log(happyCat);
    }
  }

};
/* jshint ignore:end */

/*------------------------------    COMMENTS    ------------------------------*/

Exer.comments1 = function ( war, missiles, wood, sheep, brick ) {

  if ( war ) {
    if ( missiles ) {
      // missiles.launch();
    } else {
      cower();
    }
  // don't need any wheat--I've got an 8 on that
  } else {
    if ( wood ) {
      wood.trade( sheep, 1 );
    } else if ( sheep ) {
      sheep.trade( wood, 3 );
    } else {
      brick.buy(2);  // gerroff, bandits!
    }
  }

};

Exer.comments2 = function () {

  /*
                         .       .
                        / `.   .' \
                .---.  <    > <    >  .---.
                |    \  \ - ~ ~ - /  /    |
                 ~-..-~             ~-..-~
             \~~~\.'                    `./~~~/
   .-~~^-.    \__/                        \__/
 .'  O    \     /               /       \  \
(_____,    `._.'               |         }  \/~~~/
 `----.          /       }     |        /    \__/
       `-.      |       /      |       /      `. ,~~|
           ~-.__|      /_ - ~ ^|      /- _      `..-'   f: f:
                |     /        |     /     ~-.     `-. _||_||_
                |_____|        |_____|         ~ - . _ _ _ _ _>
  */

};