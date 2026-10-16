# Terminal Task Manager App

## This is a task manager which is used in the terminal. It is intended for use with Node. Here are the steps to download and initialize it.

1. Click on the green Code button and copy the link (there is an icon of a double square which copies the url to clipboard)
2. Clone the repo using git clone url
3. cd into the project folder.
4. run npm run start, or node app.js to run the program.
5. run npm run test in the main folder to see the tests after you have installed the basic dependencies if you want to see their results

## A menu should appear and prompt for a numeric response between 1 and 10.

1. Read the Prompt and provide a number between 1 and 10 (any other values will not be accepted).
2. Based on the answer given, new prompts will appear, which will allow for multiple operations.
3. The program will run until the exit option is chosen.

## App Overview

- Please follow along with the prompts. Most of the menu's ask for numeric responses based on multiple options. Numeric fields will not allow string inputs and vice versa.

## Design Concepts and Strategies

- The file structure is setup following MVC pattern. The classes are in the model folder. The view folder holds the functions to display the menu and log the tasks. The controller folder houses the logic, and is divided into tasks and terminal. Tasks has the logic that deals with tasks and their interaction with the store. Terminal deals with the prompts, and getting inputs to use in tasks.
- The state of the app is managed using classes and the Singleton pattern. A single instance of each piece of state is declared at the bottom of each of the class declaration files. The single instances are constructed with static getInstance methods which can only create a single instance by returning the same instance unless the private variable is still null.
- A strategy pattern is used to determine which action is used based on the numeric response received. There is also another smaller use of the pattern in the filterTaskInStore method as well.
- The observer pattern is used in TaskStore to log the tasks every time that the array is touched. There is a conditional which prevents the log on initial startup. It is based on the total number of tasks made, so it won't start until a task has been added.
- Pure functions are used to help with cleaning and sanitizing inputs, and also with the CRUD actions, sort, search, and filter functions. Store helpers use a combination of the spread operator and the built in non-mutable array methods to create shallow copies, which is used to replace the state in the store with that new state (future goal is to use this with a dually linked list to manage state for the ability to undo).

## Bonus Features

- Input validation logic at every corner to make sure input from the user is of proper type and form. Most of the time spent on this project has been on the guard logic of the validator helpers. Figuring out why guards are not behaving as expected has been very tricky. There are many quirks in the language which make this step challenging.
- Unit tests for each of the pure unmutating functions using the node:test suite. Tests themselves do not completely rid a program of bugs, but they do help to keep the behavior predictable. Much struggle occured here as well.

- Basic stats for size, and total implemented
