function calculate(calc) {
  first_integer = jQuery('#input-1').val();
  second_integer = jQuery('#input-2').val();
  first_op_integer = parseInt(first_integer);
  second_op_integer = parseInt(second_integer);
  remove_text = "<button class='remove'>Delete History</button>";
  switch (calc){
    case "addition_button_":
      result = first_op_integer + second_op_integer;
      text = first_integer + " + " + second_integer + " = ";
      result_css = "<span id='add-answer'>" + text + result + remove_text + "</span>";
      break;
    case "subtraction_button_":
      result = first_op_integer - second_op_integer;
      text = first_integer + " - " + second_integer + " = ";
      result_css = "<span id='sub-answer'>" + text + result + remove_text + "</span>";
      break;
    case "multiply_button_":
      result = first_op_integer * second_op_integer;
      text = first_integer + " * " + second_integer + " = ";
      result_css = "<span id='multiply-answer'>" + text + result + remove_text +"</span>";
      break;
    case "division_button_":
      result = first_op_integer / second_op_integer;
      text = first_integer + " / " + second_integer + " = ";
      result_css = "<span id='division-answer'>" + text + result + remove_text +"</span>";
      break;
    default:
      console.log("Please enter an integer.");
  }
  result = text + result;
  jQuery('#result').html(result);
  old_history = jQuery('#calculator-history').html();
  new_html = old_history + result_css + '<br>';
  jQuery('#calculator-history').html(new_html);
}

function hide_button(){
  $(this).parent().remove();
}

setup = function() {
  jQuery('.operator-button_').click(function (){
    calculate(this.id);
  });
  $('body').on("click", '.remove', hide_button)
}

jQuery(document).ready(setup); 