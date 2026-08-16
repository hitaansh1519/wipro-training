TypeScript is a language that is built on top of JavaScript with the purpose
of helping us avoid the common pitfalls and bugs that arise in JavaScript.

It seeks to improve the experience of writing JavaScript, and the way it does
that is by adding types.

TypeScript is JavaScript only with additional types.
Typescript = Javascript with Types

TypeScript adds some extra features and special checks to the JavaScript syntax
that make it a much better development experience.

Static checking.

TypeScript detects errors in our code without running it. This is called static checking.

TypeScript helps us find errors, and most importantly, before our code even runs.

TypeScript is only there for development purposes. Eventually, it is compiled to JavaScript
only.

Any valid Javascript syntax is completely valid in Typescript.

We will compile TypeScript code into JavaScript so that it runs anywhere JavaScript does. Every TypeScript file ends with a.ts extension.

TypeScript cannot be run directly in the brower or in Node.js. It first needs to be compiled into plain JavaScript.

Write in TypeScript -> Compile to JavaScript -> Run the Javascript

We usually compile TypeScript into JavaScript using the `tsc` command.

So how does it work?
When you write TypeScript code, the file has a '.ts' extension.
You then compile that '.ts' file using the TypeScript compiler (tsc)'.
The compiler converts your .ts' file into a '.js' file - plain JavaScript.
This `.js' file can then be executed in any JavaScript environment - like
a browser or Node.js.

There is no type safety in JavaScript.


let num = 10
num = "Hello"

Type safety means the language checks if you are using the right kind of value for each variable.

The biggest advantage of TypeScript is you get errors immediately during development. This helps you catch mistakes early and
keeps your code more reliable.

Because of the type safety feature in TypeScript, we can easily catch the errors at compile time rather than waiting until run
time.

The challenge with JavaScript is that it doesn't give you early warnings about potential issues.

To set up TypeScript, you will need these tools:
1. Node. js. This lets you run the TypeScript compiler.
2. TypeScript Compiler (TSC) is a tool that converts TypeScript code into JavaScript.
3. VS Code is a free code editor that works great with TypeScript.

Why do we need the typescript compiler?
Because TypeScript is not directly understood by browsers or Node.js, they only understand JavaScript, so we need a TypeScript
compiler. To convert the .ts files into .js files


The TypeScript compiler is not pre-installed. You have to install it separately.

You can install TypeScript globally by running this command.
npm install -g typescript
sudo npm install -g typescript(for mac users)

To check if TypeScript is successfully installed, run this command.
tsc -v


Ques. What is TypeScript? Why is it better than JavaScript?
Ques. What is Static Checking?
Ques. What is Type Safty?
Ques. What are the advantages of TypeScript over JavaScript?

Ques. What is Type Inference?
Ans: Type inference in TypeScript is the compiler's ability to automatically determine and assign types to variables, expressions, and function returns based on their initial values and context, without requiring you to write explicit type annotations.

Ques. What is 'any' type?
Ans: This feature is unique in TypeScript and not present in JS. 
It turns off the type checking for this variable. So it is kind of defeating the purpose of using typescript.

Ques. What is Delayed initialization?
Ans: Delayed initialisation means I'll tell you the data type now, but I'll give the value later on.

Ques. What is Implisit Any?
Ans: Typescript tries to guess the type of a variable. If you don't give a data type or an initial value, TypeScript will assume it is any.

Ques. What is Type Annotation?
Ans: Type Annotation means assigning a type to a variable that what kind of data it will contain and detemining what will be the return type of the function.

Ques. What is Contextual Typing?
Ans: Contextual typing means typescript determines the type based on where the function is used. TypeScript sometimes guesses the type correctly by looking at the surrounding code. 

Ques. What is Type Alias
Ans: Type alias is just a way to give a name to a type so that we can reuse it. Creating a custom type.

Ques. What is Optional Properties?
Ans: It is a property which we use while decalaring the type. We can keep some properties as optional if we want.

Ques. What are Literal types?
Ans: A literal restricts a variable to specific exact values only, not just a type. 

Ques. What are Tuple?
Ans: It is an array with a fixed length and ordered with a fixed set of types.

Ques. What is Enums?
Ans: An enum (short for enumeration) in TypeScript is a feature that allows you to define a set of named constants.

Ques. What are Interfaces?
Ans: It tells you what properties an object should have, what type those properties should be, but it does not contain actual data.

     Interfaces are extendables.
     Interfaces can be merged.
     Interfaces can not do union.

Ques. When to use Interfaces and when to use Types?
Ans: Use the interface when:
1. You are defining an object structure.
2. You are working with classes.
3. You expect extension.

Use types when:
1. You need union
2. You need more flexibility
3. You are combining multiple types

