# Terminal Task Manager App

## This is a task manager which is used in the terminal. It is intended for use with Node. Here are the steps to download and initialize it.

1. Clone the repo using git clone <web address here>
2. cd into the project folder.
3. run node app.js

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
