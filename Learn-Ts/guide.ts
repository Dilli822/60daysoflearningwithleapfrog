import { SystemSecurityUpdate } from "@mui/icons-material"

# What is Typescript?
--> It is a STRICT Synatical superset of Javascript just like Sass is superset of CSS. That means all 
Javascript code is valid in Typescript(Ts) with some additional features.

--> Typescript is a static type checker. It won't allow allow to run buggy program at all 
which means it checks and detects error earlier before the execution.

--> It is best progamming language for large-scale application for less buggy program.
---> Unlike Javascript it is not dynamically types language but statically typed language 
which is pure object oriented with classes and interfaces.

--> Typescript is maintained and developed by Microsoft.

### How does Typescript run in browser? #####
--- Typescript directly doesn't run in browser.
---> Typescript Code --- Compiled  to Javascript --- Runs Browser

### Opinions
## Why Typescript?
---> It compiles to pure Javascript different versions like ES6,ES5..
---> It prevents bugs and increases Code Quality.
---> It helps to understand the data types and can run everywhere.







--- Prerequisites
--- Need a Good Understanding of OOP concepts with basic of Javascript


# How to Install Typescript?
---> first must have node js installed which is runtimes environment for Javascript.

# Install Typescript
--- windows (g means globally)
--- npm i -g typescript 

# Check Versions of your Typescript
--- type tsc -v (on windows terminal)


# installing on mac 
--- mac os
---- sudo npm i -g typescript

# Compile the typescript file
---- tsc index.ts 
-- or whatever the name of your Typescript file

# check your Typescript version
--tsc --version

# run the js file with node command
-- node index.js




------ DAY -2 
# Basic Folder Structure of Typescript
---> After the installation of Typescript I am using VSCode which is meant to be best IDE for Typescript 
-- but you can use any IDE 
-- Let's create a folder named Learn-Typescript

Learn-Typescript
  |--- main.ts
  |