# Chapter 2: <small>Program Structure</small>

Welcome to _Eloquent JavaScript_, Chapter 2!

These are the instructions for the exercises in Chapter 2\. Remember that all
your work will be done in the `index.js` file (in your text editor), and you can
check your work by

    $ ywca test chapter01 | less

### Exercises

*   [Looping a Triangle](#triangle)
*   [FizzBuzz](#fizzbuzz)
*   [Chess Board](#chessboard)

<br />

## Expressions and Statements

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_x4mfX9d1CF).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Expressions 1</th>
      <td>
        Make the function return a nested expression (use parentheses) whose
        evaluated value is not undefined.
      </td>
    </tr>
    <tr>
      <th>Statements 1</th>
      <td>Write a statement that is not undefined.</td>
    </tr>
  </tbody>
</table>

* * *

## Variables

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_neJqLsvK+g).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Variables 1</th>
      <td>
        Write a statement that declares a variable. Then return that variable.
      </td>
    </tr>
    <tr>
      <th>Variables 2</th>
      <td>
        Write a statement that declares a variable. Then write a statement to
        assign a number value to it. Then return the variable.
      </td>
    </tr>
    <tr>
      <th>Variables 3</th>
      <td>
        Write a statement that declares a variable and initializes it to a
        string. Then return the variable.
      </td>
    </tr>
    <tr>
      <th>Variables 4</th>
      <td>
        A parameter `n` is passed into the function. Return the parameter.
      </td>
    </tr>
    <tr>
      <th>Variables 5</th>
      <td>
        A parameter <code>n</code> is passed into the function. Declare a new
        variable and initialize it to the value of <code>n</code>. Return the
        new variable.
      </td>
    </tr>
    <tr>
      <th>Variables 6</th>
      <td>
        You have 3 apples (declare a variable named <code>apples</code> and
        initialize it to <code>3</code>. Stacy gives you more apples (the
        parameter <code>stacys</code>). Return the total number of apples
        you have.
      </td>
    </tr>
    <tr>
      <th>Variables 7</th>
      <td>
        You have a certain amount of pocket change given by the parameter
        provided (<code>change</code>). You find a quarter. Then you spend a
        dime on old fashioned candy. How much money do you have now? Use type
        coercion to turn your pocket change into a string add a dollar sign to
        the beginning. Return that string.
      </td>
    </tr>
  </tbody>
</table>

* * *

## Keywords and Reserved Words

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_/AKSyKwnu0).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Keywords 1</th>
      <td>
        Uncomment the function. Then fix the function so no keywords or reserved
        words are improperly used.
      </td>
    </tr>
  </tbody>
</table>

* * *

## The Environment

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_0pDQHpgrM3).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Enviroment 1</th>
      <td>
        <p>
          This function has five commented-out return lines. Four of the return
          lines return an enviroment variable. One of the return lines does not.
        </p>
        <p>
          Uncomment the the return line that does not return an
          enviroment variable.
        </p>
      </td>
    </tr>
  </tbody>
</table>

* * *

## Functions

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_tJKFexJV/j).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Funtions 1</th>
      <td>
        <p>
          You are given the three functions <code>recombobulate</code>,
          <code>setPowerLevel</code>, and <code>cornTortilla</code>.
        </p>
        <ul>
          <li>Call <code>recombobulate</code> with no arguments.</li>
          <li>
            Call <code>setPowerLevel</code> with a value over <code>9000</code>.
          </li>
          <li>
            Call <code>cornTortilla</code> with the values
            <code>"chicken"</code>, <code>"queso"</code>, <code>"bacon"</code>,
            and <code>"lime"</code>, in that order.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

* * *

## The `console.log` Function

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_9qu6Ki2/lH).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Console 1</th>
      <td>Output something to the console.</td>
    </tr>
    <tr>
      <th>Console 2</th>
      <td>Print the parameter <code>printme</code> to the console.</td>
    </tr>
    <tr>
      <th>Console 3</th>
      <td>
        <p>
          Use the provided parameter <code>data</code> and string concatenation
          to output
        </p>
        <pre>The magic word is "xxxxx"</pre>
        <p>
          to the console, where the <code>xxxxx</code> is the value provided in
          <code>data</code>. Do not change the value of the variable
          <code>data</code>.
        </p>
      </td>
    </tr>
    <tr>
      <th>Console 4</th>
      <td>
        Use comma-separated values to output two things to the console with one
        call.
      </td>
    </tr>
    <tr>
      <th>Console 5</th>
      <td>
        Output the first parameter <code>x</code> to the console. Then make the
        function return the parameter <code>y</code> plus <code>1</code>. Do not
        change the value of the variable <code>y</code>.
      </td>
    </tr>
  </tbody>
</table>

* * *

## Return Values

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_lKC7MRhfz2).

For these next exercises, use the following functions:

`magicFunc()` takes no parameters and returns a numerical value in the form
of `##.#`.

`strShift( str )` takes a string and returns a new string with all the letters
shifted down the alphabet one place.

`strShuffle( str1, str2 )` takes two strings and returns a new string with all
the letters shuffled together.

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Return 1</th>
      <td>Call and log out the result of <code>magicFunc</code>.</td>
    </tr>
    <tr>
      <th>Return 2</th>
      <td>Call and return the result of <code>magicFunc</code>.</td>
    </tr>
    <tr>
      <th>Return 3</th>
      <td>
        <p>
          Call <code>strShift</code> with the argument <code>"abczABCZ"</code>.
          Log the result. Then return that same result with <code>"123"</code>
          concatenated to the end.
        </p>
        <p>
          <small>Hint: Save the result of <code>strShift</code> in a
          variable.</small>
        </p>
      </td>
    </tr>
    <tr>
      <th>Return 4</th>
      <td>
        Log the result of the string concatenation of two separate calls to
        <code>magicFunc</code>.
      </td>
    </tr>
    <tr>
      <th>Return 5</th>
      <td>
        <p>Fill in the function provided to do the following:</p>
        <ol>
          <li>
            Shift the string <code>abcABC123!@#</code> with
            <code>strShift</code>.
          </li>
          <li>
            Shift the string <code>a S d F j K l</code> with
            <code>strShift</code> <em>twice<em>.
          </li>
          <li>
            Return the result of these two _shifted_ strings passed into
            <code>strShuffle</code> with the first string as the first argument
            and the second string as the second argument.
          </li>
        </ol>
        <p>
          Once you have your solution, refactor it to contain only three
          statements in which...
        </p>
        <ol>
          <li>
            Statement #1 declares and initializes a variable for the
            first string.
          </li>
          <li>
            Statement #2 declares and initializes a variable for the
            second string.
          </li>
          <li>Statement #3 is a return statement.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Prompt and Confirm

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_bhFVJn8rDc).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Prompt 1</th>
      <td>
        Call <code>prompt</code> with the string <code>"What is the answer to
        the meaning of life, the universe, and everything?"</code> and return
        the result.
      </td>
    </tr>
    <tr>
      <th>Confirm 1</th>
      <td>
        Call <code>confirm</code> with the string <code>"Imma let you finish,
        but Javascript is one of the best programming languages of all
        time...one of the best programming languages of all time!"</code> and
        return the result.
      </td>
    </tr>
  </tbody>
</table>

<br />

## Control Flow

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_mGjwXljToy).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Control 1</th>
      <td>
        Prompt the user for information and then write the result to
        the console.
      </td>
    </tr>
    <tr>
      <th>Control 2</th>
      <td>
        <p>
          In this exercise you will need to make use of a function called
          <code>strReverse<code> that takes one string argument and returns a
            new string that is the reverse.
          </p>
        <p>
          Write statements in the proper order to correctly execute the
          following sequence:
        </p>
        <ol>
          <li>Declare a variable named <code>foo</code>.</li>
          <li>Initialize <code>foo</code> with a string.</li>
          <li>Log <code>foo</code> to the console.</li>
          <li>
            Concatenate the parameter <code>bar</code> to be beginning and end
            of foo and save the result in a new variable called
            <code>ding</code>.
          </li>
          <li>
            Call <code>strReverse</code> and pass it <code>ding</code> (as an
            argument). Send the result to the user in a
            <code>confirm</code> window.
          </li>
          <li>
            Save the user's response in a new variable
            called <code>quux</code>.
          </li>
          <li>Return the opposite of <code>quux<code>.</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Conditional Execution

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_M37XqCwh0I).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Conditional 1</th>
      <td>
        This function outputs a message to the console. You are given a boolean
        parameter <code>isSerious</code>. Complete the function such that it
        also outputs the message <code>On second thoughts, let's not go to
        Camelot. It is a silly place.</code> if <code>isSerious</code>
        is <code>false</code>.
      </td>
    </tr>
    <tr>
      <th>Conditional 2</th>
      <td>
        <p>
          You are given one number parameter <code>temperature</code>. Complete
          the function such that...
        </p>
        <ul>
          <li>
            If <code>temperature</code> is greater than or equal to
            <code>70</code>, output <code>Hermit crab warning!</code> to
            the console.
          </li>
          <li>
            Otherwise, output <code>Catch of the day: influenza, $14/lb.</code>
            to the console.
          </li>
          <li>
            In either case, then print <code>Thanks for visiting Pier One and
            Three Quarters!</code> to the console.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Conditional 3</th>
      <td>
        <p>You are given a string parameter <code>whatDay</code>.</p>
        <ol>
          <li>
            Declare a variable <code>luckyNumber</code> and initialize it
            to <code>7</code>.
          </li>
          <li>
            If the length of <code>whatDay</code> is <code>6</code> or less,
            concatenate an exclamation point to the end of
            <code>luckyNumber</code>. Otherwise, do nothing.
          </li>
          <li>
            If <code>whatDay</code> is <code>"Mannersday"</code>, add
            <code>4</code> to <code>luckyNumber</code>.
          </li>
          <li>
            If <code>whatDay</code> is <code>"Foosday"</code>, add
            <code>2</code> to <code>luckyNumber</code>.
          </li>
          <li>
            If <code>whatDay</code> is <code>"Heyday"</code>, concatenate the
            first character contained in <code>luckyNumber</code> to the end of
            <code>luckyNumber</code>.
          </li>
          <li>
            If <code>whatDay</code> is any other day, set
            <code>luckyNumber</code> to <code>Infinity</code>.
          </li>
          <li>In all cases return <code>luckyNumber</code>.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th>Conditional 4</th>
      <td>
        <ol>
          <li>
            Prompt the user for a number with the message <code>Enter today's
            date, please.</code>.
          </li>
          <li>
            If the user's input is not a number, output <code>What do you think
            this is, bub? Wonderland?</code> to the console.
          </li>
          <li>Otherwise...</li>
          <li>
            <ol>
              <li>
                If the user's input is less than <code>1</code>, print
                <code>Negativelaaaaaaand~!</code> to the console.
              </li>
              <li>
                If the user's input is greater than <code>31</code>, print
                <code>Are they paying you overtime for this?</code> to
                the console.
              </li>
              <li>
                If the user's input between <code>29</code> and <code>31</code>,
                inclusive, print <code>I sure hope it isn't February.</code> to
                the console.
              </li>
              <li>
                Otherwise, print <code>Did you know? There are exactly ## ways
                to make today awesome!</code> to the console, where
                <code>##</code> is the number the user inputted.
              </li>
            </ol>
          </li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

<br />

## `while` and `do while` Loops

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_JniuPPdJZD).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>While 1</th>
      <td>
        <p>The following code is in the function for this exercise:</p>
<pre>console.log("10 sheep");
console.log("9 sheep");
console.log("8 sheep");
console.log("7 sheep");
console.log("6 sheep");
console.log("5 sheep");
console.log("4 sheep");
console.log("3 sheep");
console.log("2 sheep");
console.log("1 sheep");</pre>
        <p>Recreate this code using a <code>while</code> loop.</p>
      </td>
    </tr>
    <tr>
      <th>While 2</th>
      <td>
        <p>The following code is in the function for this exercise:
<pre>var deadWitch = "I'm melting!";
while(deadWitch.length > 0) {
  console.log(deadWitch);
  deadWitch = deadWitch.substr(2);
}
console.log("What a world!");</pre>
        <p>Recreate this code using without using a loop.</p>
      </td>
    </tr>
    <tr>
      <th>Do While 1</th>
      <td>
        <p>The following code is in the function for this exercise:</p>
<pre>console.log(0);
console.log(1);
console.log(2);
console.log(0);
console.log(1);
console.log(2);</pre>
        <p>Recreate this code using a <code>do ... while</code> loop.</p>
      </td>
    </tr>
    <tr>
      <th>Do While 2</th>
      <td>
        <p>The following code is in the function for this exercise:</p>
<pre>var trainNum = 1;
do {
  console.log("Train# " + trainNum + ": In flight!?");
} while (trainNum++ < 7);</pre>
        <p>Recreate this code using without using a loop.</p>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Indenting Code

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_WOc6wUOZsf).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Indenting 1</th>
      <td>
        Correctly indent the code block using <em>two</em> spaces for
        each block.
      </td>
    </tr>
    <tr>
      <th>Indenting 2</th>
      <td>
        Correctly indent the code block using <em>four</em> spaces for
        each block.
      </td>
    </tr>
  </tbody>
</table>

<br />

## `for` Loops

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_GLz5olRt8V).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>For 1</th>
      <td>Rewrite the loop as a linear sequence of statements.</td>
    </tr>
    <tr>
      <th>For 2</th>
      <td>
        Rewrite the repetative code with a <code>for</code> loop. Then further
        refactor to use nested <code>for</code> loops.
      </td>
    </tr>
    <tr>
      <th>For 3</th>
      <td>
        <p>
          Write a loop that counts backwards from <code>20</code> to
          <code>5</code> (inclusive) and prints two arguments:
        </p>
        <ol>
          <li>the number</li>
          <li><code>even</code> if the number is even or <code>odd</code> if the number is odd</li>
        </ol>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Breaking Out of a Loop

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_pNim3UxKW2).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Breaking 1</th>
      <td>
        Yeng made an infinite loop. Place a <code>break</code> in the loop to
        make it stop.
      </td>
    </tr>
    <tr>
      <th>Breaking 2</th>
      <td>
        <p>
          Theatre is an object that contains a list of movies. We are advancing
          the movie schedule one by one by calling <code>theatre.next()</code>,
          which returns the name of the next movie. We are then logging the new
          current movie is with <code>theatre.current()</code>.
        </p>
        <p>
          We don't like the movie <code>Breakin' 2: Electric Boogaloo</code>, so
          when <code>theatre.current()</code> returns <code>"Electric
          Boogaloo!"</code> break from the loop; we are done looking
          at movies.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Updating Variables Succinctly

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_f7LsUmJq1I).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Succinct 1</th>
      <td>
        <p>
          Use succinct operators to perform the following operations on the
          parameter <code>kiwis</code>.
        </p>
        <ol>
          <li>Quadruple <code>kiwis</code>.</li>
          <li>Reduce <code>kiwis</code> by <code>2</code>.</li>
          <li>Halve <code>kiwis</code>.</li>
          <li>
            Concatenate <code> handsomely hirsute kiwis</code> to
            <code>kiwis</code> (remember the leading space).
          </li>
          <li>Return <code>kiwis<code>.</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th>Succinct 2</th>
      <td>Edit the <code>for<code> loop to use the incrementation operator.</td>
    </tr>
    <tr>
      <th>Succinct 3</th>
      <td>
        The code provided contains a logic error. It uses a decrementation
        operator to walk backwards through a string and print each character,
        but the current value of <code>pointer</code> is being returned before
        it is decremented, generating an error. Change the postfixed operator to
        a prefixed operator to correct the error.
      </td>
    </tr>
  </tbody>
</table>

<br />

## Dispatching on a Value with `switch`

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_jpGEbhH1GX).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Switch 1</th>
      <td>
        <p>
          Create a switch that dispatches on the parameter <code>animal</code>.
          In each case, concatenate the correct response to end of the
          <code>output</code> string. The responses are...
        </p>
        <ul>
          <li><code>"cow"</code>: <code>"foo"</code></li>
          <li><code>"sheep"</code>: <code>"bar"</code></li>
          <li><code>"duck"</code>: <code>"quux"</code></li>
          <li>
            <code>default</code>:
            <code>"ring-a-ding-ding-dingding-ding-a-ding-ding"</code>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<br />

## Capitalization

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_25X42G30Nq).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Capitalization 1</th>
      <td>
        Correct the capitalization for the for variables in the
        exercise function.
      </td>
    </tr>
  </tbody>
</table>

<br />

## Comments

These exercises correspond to [this section of the text](http://eloquentjavascript.net/02_program_structure.html#p_zMlRK/pymj).

<table>
  <thead>
    <tr>
      <th>Exercise #</th>
      <th>Goal</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Comments 1</th>
      <td>
        <p>Do the following:</p>
        <ol>
          <li>Find and comment out the line that launches missiles.</li>
          <li>
            Create a single-line comment that says something about
            <code>wheat</code>.
          </li>
          <li>
            Add a comment to the end of the line that buys brick, and make that
            comment include <code>bandits!</code>.
          </li>
        <ol>
      </td>
    </tr>
    <tr>
      <th>Comments 2</th>
      <td>Create a block comment and draw a little picture inside.</td>
    </tr>
  </tbody>
</table>

<br />

* * *

<br />

# Looping a Triangle

See the instructions at [the end of chapter 2](http://eloquentjavascript.net/02_program_structure.html#p_VR0+805/R0).

Write your solution in `triangle.js`. Run the tests with

    $ ywca test chapter02 | less

<br />

* * *

<br />

# FizzBuzz

See the instructions at [the end of chapter 2](http://eloquentjavascript.net/02_program_structure.html#c_CfkOp8tkUe).

Write your solution in `fizzbuzz.js`. Run the tests with

    $ ywca test chapter02 | less

<br />

* * *

<br />

# Chess Board

See the instructions at [the end of chapter 2](http://eloquentjavascript.net/02_program_structure.html#p_ixkJ0lwGKY).

Write your solution in `chessboard.js`.

### Further Instructions

The book says to create a string and test it with `console.log()`. When you've
got it figured out, instead of logging the string out, return it.

When you have finished all the specifications in the book, modify your function
to accept a parameter `n` that, if passed into your function, will dynamically
specify the size of the chessboard to return. Remember you can use the logical
OR operator to choose the first item that exists:

    var size = n || 8 ;

If there is no `n`, `n || 8` will default to `8`.

Run the tests with

    $ ywca test chapter02 | less
