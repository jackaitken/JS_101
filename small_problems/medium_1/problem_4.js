/* eslint-disable max-lines-per-function */
function minilang(arg) {
  let stack = [];
  let register = 0;
  let splitArg = arg.split(' ');

  for (let i = 0; i < splitArg.length; i++) {
    switch (splitArg[i]) {
      case 'PUSH' :
        stack.push(register);
        break;
      case 'ADD' :
        register += stack.pop();
        break;
      case 'SUB' :
        register -= stack.pop();
        break;
      case 'MULT' :
        register *= stack.pop();
        break;
      case 'DIV' :
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER' :
        register = Math.floor(register % stack.pop());
        break;
      case 'POP' :
        register = stack.pop();
        break;
      case 'PRINT' :
        console.log(register);
        break;
      default:
        register = Number(splitArg[i]);
    }
  }
  return register;
}


minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
