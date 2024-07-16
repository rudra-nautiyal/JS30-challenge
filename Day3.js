const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

terminal.question(
  "Positive or Negative Number\nPlease enter a number: ",
  (input) => {
    let randomNumber = parseFloat(input);

    if (isNaN(randomNumber)) {
      console.log("Not a number.");
    } else if (randomNumber > 0) {
      console.log("Positive Number!");
    } else if (randomNumber < 0) {
      console.log("Negative Number!");
    } else {
      console.log("It is 0!");
    }

    // Task 2
    terminal.question("\nCan you vote?\nPlease enter your Age: ", (input) => {
      let randomAge = parseFloat(input);

      if (isNaN(randomAge)) {
        console.log("Not a number.");
      } else if (randomAge >= 18) {
        console.log("You can vote!");
      } else {
        console.log("You can't vote!");
      }

      // Task 3
      terminal.question(
        "\nCheck which of the 3 Numbers is the Largest.\nPlease enter the first number: ",
        (input1) => {
          let number1 = parseFloat(input1);

          terminal.question("Please enter the second number: ", (input2) => {
            let number2 = parseFloat(input2);

            terminal.question("Please enter the third number: ", (input3) => {
              let number3 = parseFloat(input3);

              if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
                console.log("Please enter valid numbers.");
              } else if (number1 === number2 && number2 === number3) {
                console.log("All numbers are the same.");
              } else if (number1 >= number2 && number1 >= number3) {
                console.log("Biggest is first number!");
              } else if (number2 >= number1 && number2 >= number3) {
                console.log("Biggest is second number!");
              } else {
                console.log("Biggest is third number!");
              }

              // Task 4
              terminal.question(
                "\nWhich day of the week?\nPlease enter a number (1-7): ",
                (input) => {
                  let randomDay = parseFloat(input);

                  switch (randomDay) {
                    case 1:
                      console.log("Monday");
                      break;
                    case 2:
                      console.log("Tuesday");
                      break;
                    case 3:
                      console.log("Wednesday");
                      break;
                    case 4:
                      console.log("Thursday");
                      break;
                    case 5:
                      console.log("Friday");
                      break;
                    case 6:
                      console.log("Saturday");
                      break;
                    case 7:
                      console.log("Sunday");
                      break;
                    default:
                      console.log("Please input a number between 1 and 7");
                      break;
                  }

                  // Task 5
                  terminal.question(
                    "\nWhat is your Grade?\nPlease enter your Marks: ",
                    (input) => {
                      let randomMarks = parseFloat(input);

                      if (isNaN(randomMarks)) {
                        console.log("Please enter a valid number.");
                      } else if (randomMarks < 30) {
                        console.log("Fail");
                      } else if (randomMarks >= 30 && randomMarks < 50) {
                        console.log("D");
                      } else if (randomMarks >= 50 && randomMarks < 70) {
                        console.log("C");
                      } else if (randomMarks >= 70 && randomMarks < 90) {
                        console.log("B");
                      } else if (randomMarks >= 90 && randomMarks <= 100) {
                        console.log("A");
                      } else {
                        console.log("Please enter correct Marks! (1~100)");
                      }

                      // Task 6
                      terminal.question(
                        "\nPositive or Negative?\nPlease enter a number: ",
                        (input) => {
                          let randomTernary = parseFloat(input);

                          if (isNaN(randomTernary)) {
                            console.log("Please enter a valid number.");
                          } else {
                            let result =
                              randomTernary >= 0 ? "Positive or 0" : "Negative";
                            console.log(result);
                          }

                          // Task 7
                          terminal.question(
                            "\nWas it a Leap Year?\nPlease enter a Year: ",
                            (input) => {
                              let randomYear = parseFloat(input);

                              if (isNaN(randomYear)) {
                                console.log("Please enter a valid year.");
                              } else if (randomYear % 4 === 0) {
                                if (randomYear % 100 === 0) {
                                  if (randomYear % 400 === 0) {
                                    console.log("Leap Year!");
                                  } else {
                                    console.log("Not a Leap Year!");
                                  }
                                } else {
                                  console.log("Leap Year!");
                                }
                              } else {
                                console.log("Not a Leap Year!");
                              }

                              terminal.close();
                            }
                          );
                        }
                      );
                    }
                  );
                }
              );
            });
          });
        }
      );
    });
  }
);
