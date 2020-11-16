# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer:

  Super() is an essential part of react syntax to display a component.

  Researched answer:

Super is the syntax element that allows to pass data or behaviour from a parent to child in react.


2. What is a virtual DOM?

  Your answer:

it's a virtual page between the code and the page visualized in the browser

  Researched answer:

  virtual DOM (Document Object Model) is a concept where a virtual representation of the UI is kept in memory and synced with the real one when something in  the React code changes.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
 
 when I create a component (.js file), I need two elements to make react rendering it:

 put a reference in my <></> section th name of the component i.e. <> Component</> and at the top of the page import my component and its path.


  Researched answer:

  to display a basic component I need to extend React.Component called render().




4. What is JSX?

  Your answer:

it's the type of javascript used in React

  Researched answer:

  i't a peculiarity of react and stands for Javascript XML, it's an hybrid between JS and HTML and it's an extension of JS syintax, it allows to write html in JS.
  the most simple example could be:
  const element = <h1>Hello, world!</h1>;




5. What is state in React?

  Your answer:

  it's a way to call  a class of a function that changes dynamically.

  Researched answer:

  State is an built-in object in react that helps to pass information around inside a single component.
  if I change the state object the page gets rendered again.




6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  (briefly mentioned in class but I dont't remember :) ) 

  Researched answer:

  A strict definition of Hoisting could be: "(during the compile phase ) 
  the declarations of variables and functions are physically moved to the top of the code".
  Even if we call the function at the beginning of the code, before it is written, the code continues to work.




## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods:

 special methods on the component class to run some code when a component mounts and unmounts
 mounting is executed by constuctor and render or by another funxtion calld componentDidMount(), to unmount a component and removed from teh DOM teh command is componentWillUnbmount()

- React props

  props are  readonly inputs to a React component. They are data passed down from a parent component to a child component.

- event.preventDefault()

  The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
  For example, this can be useful when:
  Clicking on a "Submit" button, prevent it from submitting a form
  Clicking on a link, prevent the link from following the URL

- DOM events

HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.
Events are normally used in combination with functions, and the function will not be executed before the event occurs (e.g. click a button, ).

- MVC

model view contoller. 
commonly used for developing user interfaces that divides the related program logic into three interconnected elements. 
This is done to separate internal representations of information from the ways information is presented to and accepted from the use.
it is used in a lot of programming languages like JS Python and Ruby.


