function calculate_area_radius() {
    r = parseInt(jQuery("#radius").val()) ;
    jQuery("#p1").html(Math.PI * (Math.pow(r,2)))
}
function setup() {
    jQuery("#calculate").click(calculate_area_radius);
}
jQuery(document).ready(setup);