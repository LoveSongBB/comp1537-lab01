addition = function() {
  result = parseInt(jQuery("#input-1").val()) + parseInt(jQuery("#input-2").val());
  result_text = jQuery("#input-1").val() + " + " + jQuery("#input-2").val() + " = "
  result = result_text + result;
  jQuery("#result").text(result);
  result_css = "<span id='add-answer'>" + result + "</span>";
  old_history = jQuery("#calculator-history").html();
  new_html = old_history + result_css + "<br>";
  jQuery("#calculator-history").html(new_html);
}

division = function() {
  result = parseInt(jQuery("#input-1").val()) / parseInt(jQuery("#input-2").val());
  result_text = jQuery("#input-1").val() + " / " + jQuery("#input-2").val() + " = "
  result = result_text + result;
  jQuery("#result").html(result);
  result_css = "<span id='division-answer'>" + result + "</span>";
  old_history = jQuery("#calculator-history").html();
  new_html = old_history + result_css + "<br>";
  jQuery("#calculator-history").html(new_html);
}

multiply = function() {
  result = parseInt(jQuery("#input-1").val()) * parseInt(jQuery("#input-2").val());
  result_text = jQuery("#input-1").val() + " * " + jQuery("#input-2").val() + " = "
  result = result_text + result;
  jQuery("#result").html(result);
  result_css = "<span id='multiply-answer'>" + result + "</span>";
  old_history = jQuery("#calculator-history").html();
  new_html = old_history + result_css + "<br>";
  jQuery("#calculator-history").html(new_html);
}

subtraction = function() {
  result = parseInt(jQuery("#input-1").val()) - parseInt(jQuery("#input-2").val());
  result_text = jQuery("#input-1").val() + " - " + jQuery("#input-2").val() + " = "
  result = result_text + result;
  jQuery("#result").html(result);
  result_css = "<span id='sub-answer'>" + result + "</span>";
  old_history = jQuery("#calculator-history").html();
  new_html = old_history + result_css + "<br>";
  jQuery("#calculator-history").html(new_html);
}

setup = function() {
    jQuery("#addition_button").click(addition);
    jQuery("#division_button").click(division);
    jQuery("#multiply_button").click(multiply);
    jQuery("#subtraction_button").click(subtraction);
}

jQuery(document).ready(setup);