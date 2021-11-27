class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter You Name Here...");
    this.input2 = createInput("Enter Correct Option No...");
    this.button = createButton("Submit");
    this.question = createElement('h2');
    this.option1 = createElement('h2');
    this.option2 = createElement('h2');
    this.option3 = createElement('h2');
    this.option4 = createElement('h2');
    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(width/2.45, 0);

    // this.question("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // this.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    // question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );

    this.question.position(180, 70);
    this.option1.html("1: Everyone " );
    this.option1.position(180, 110);
    this.option2.html("2: Envelope" );
    this.option2.position(180, 130);
    this.option3.html("3: Estimate " );
    this.option3.position(180, 150);
    this.option4.html("4: Example" );
    this.option4.position(180, 170);

    this.input1.position(400, 230);
    this.input2.position(600, 230);
    this.button.position(550, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position();

      // this.message("Thank You, Your Answer Has Been Submitted");
      // this.message(350, 350);

      // this.message.html("Thank You, Your Answer Has Been Submitted");
      // this.message.position(350);


    });
  }
}
