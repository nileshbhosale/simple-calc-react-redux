import mathEvalutor from 'math-expression-evaluator';

// data reducer
export default function calculate(state = {}, action) {
  switch (action.type) {
  	 case 'Parenthesis_Keypress':
      var new_state = JSON.parse(JSON.stringify(state));
      new_state.isInProgress = true;
      new_state.value = (new_state.value!=undefined?new_state.value:"")+"" + action.value;
      return new_state;

  	case 'Number_Keypress':
      var new_state = JSON.parse(JSON.stringify(state));

      if(!new_state.isInProgress){
          new_state.value = "";
          new_state.isInProgress = true;
      } 

      new_state.value = (new_state.value!=undefined?new_state.value:"")+"" + action.value;
      return new_state;


  	case 'Clear':
      var new_state = JSON.parse(JSON.stringify(state));
      new_state.value = "";
      new_state.preValue = "";
      return new_state;

    case 'Calculate':
      var new_state = JSON.parse(JSON.stringify(state));
      new_state.preValue = new_state.value;
      var value = new_state.value.toString();

      try{
         new_state.value = mathEvalutor.eval(value);
      }catch(e){
         new_state.value = "Error";
      }
      new_state.isInProgress = false;

      return new_state;

    case 'Operator_Keypress':
      var new_state = JSON.parse(JSON.stringify(state));
      value = action.value;
      new_state.isInProgress = true;
      new_state.value = (new_state.value!=undefined?new_state.value:"")+"" + action.value;
      return new_state;

      // initial state
    default:
    console.log("default reducer triggerd");
    return state;
  
  }
}