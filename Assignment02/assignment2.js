// CODE ASSISTANCE FROM LAB / VIDEO HINTS

page_size = null;
current_page_id = 1;
number_of_pages = null;
page_size = null;
movie_data = null;
start_index = null;
end_index = null;


function call_ajax(){

    query = $("#movie_name").val();
//    console.log(query)
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=5d8b92efc96aab7a2484aab0f4d1c5fc&query=${query}`,
        "type": "GET",
        "success": fetch_movie
    })
}


function paginate_row(){

    number_of_pages =  Math.ceil(movie_data.results.length / page_size);
//    console.log(number_of_pages)
    $("header").show();
    $("#numbered_buttons_id").empty()
    for(i = 1; i <= number_of_pages; i++){
        x = `<button id="${i}" class="numbered_buttons"> ${i} </button>`;
        $("#numbered_buttons_id").append(x)

    }
}


function fetch_movie(data) {

    movie_data = data;
    $("#last").show();
    $("#first").show();
    end_index = (page_size * (current_page_id - 1)) + page_size + 0;
    start_index = (page_size * (current_page_id - 1)) + 0;
//    console.log(current_page_id)
//    console.log(page_size)
//    console.log(null * -1)

    for (i = Math.abs(start_index) ; i < end_index; i++) {
//        console.log(length)
//        console.log(data.page)
//        console.log(start_index)
//        console.log(current_page_id)
//        console.log(end_index)
        console.log(data.results[i])
        $("#results").append("<h4> #" + (i + 1) + "</h4>");
        $("#results").append("<h2> Title: " + data.results[i].original_title + "</h2>");

        $("#results").append("<p>" + data.results[i].overview + "</p>");

        img_path = data.results[i].poster_path
        image_html =`<img src='https://image.tmdb.org/t/p/w500/${img_path}'>`
        $("#results").append(image_html + "<br>");

        backdrop_button = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
        $("#results").append(backdrop_button);
    }

    paginate_row();

}


function drop_down_menu_has_changed(){

    page_size = $(this).val();
    page_size = Number(page_size);
//    console.log(page_size)
    paginate_row();

}


function display_back_drop() {

    image_value = $(this).attr("id");
//    console.log(`<img src="https://image.tmdb.org/t/p/original${image_value}" width="100"%>`);
    $("#right_side").html(`<img src="https://image.tmdb.org/t/p/original${image_value}" width="100%">`);

}


function header_button(){

    current_page_value = $(this).attr("id");
    $("#results").html(`<h1> Page ${current_page_value}</h1>`)
    current_page_id = Number(current_page_value);
//    console.log(current_page_id);

   $("#next").show();
   $("#prev").show();

}

function first(){

    $("#results").html(`<h1> Page 1</h1>`)
    current_page_id = 1;

    $("#next").show();
    $("#prev").show();

}


function last(){

    $("#results").html(`<h1> Page ${number_of_pages}</h1>`)
    current_page_id = number_of_pages;

    $("#next").show();
    $("#prev").show();

}


function next(){

    if(current_page_id < number_of_pages)
        current_page_id++;
    $("#results").html(`<h1> Page ${current_page_id}</h1>`)

}


function prev(){

    if(current_page_id > 1)
        current_page_id--;

    $("#results").html(`<h1> Page ${current_page_id}</h1>`)

}


function setup() {

   $("#find_movie_info").click(call_ajax);

   $("body").on("click", ".numbered_buttons", header_button);
   $("body").on("click", ".numbered_buttons", call_ajax);

   $("body").on("click",".backdrop_button" ,display_back_drop);

   $("select").change(drop_down_menu_has_changed);
   page_size = Number($("option:selected").val());

   $("#first").click(first);
   $("#first").click(call_ajax);

   $("#last").click(last);
   $("#last").click(call_ajax);

   $("#next").click(next);
   $("#next").click(call_ajax);

   $("#prev").click(prev);
   $("#prev").click(call_ajax);

   $("#next").hide();
   $("#prev").hide();

   $("#last").hide();
   $("#first").hide();

}


jQuery(document).ready(setup)