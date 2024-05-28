/*js engine = program that executes javascript code
callstack = where code is executed
heap = where objects are stored

code is either compiled or interprited
compilation = entire code is converted into machine code at once, and written to a binary file that can be executed by a computer
interpretation = interpreter runs through the source code and executes line by line
just-in-time (JIT) compilation = entire code is converted into machine code at once, then executed immediately
modern JS uses JIT

parsing = read code

top level code are NOT inside functions = global execution context - 
enviornment in which a piece of JS is executed. stores all necessary information for some code to be executed

for each function call, a new execution context is created = the call stack

//scoping
how our program's variables are organized and accessed
lexical scoping - scoping is controlled by placement of functions in blocks of code
scope - space or environment in which certain variable is declared. global/function/block
scope of variable -  region of our code where a certain variable can be accessed

//global
outside of any funtion or block
-variable declared in global scope are accessible everywhere

//function
-variables are accessible only inside function, NOT outside
-also called local scope

//block
-variable are accessible only inside block ex. () {}
-BUT this only applies to let and const variables
-functions are also block scoped (in strict mode)

all scopes have access to the scopes in the parent scope, so an outer scope only NOT child/inner scopes = scope chain

var = function-scoped
let and const = blocked-scoped

//scope chain
-order in which functions are written in the code / has nothing to do with order in which functions are called
-refer to scopeChainVScallStack png for details
*/

