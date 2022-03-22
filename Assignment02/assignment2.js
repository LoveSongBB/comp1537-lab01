function setup() {
   $("#movie_information").click(movie_api)
//   $("body").on("click",".backdrop_button" ,display_back_drop)
}

function movie_api(){
    value = $("#movie_title").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=5d8b92efc96aab7a2484aab0f4d1c5fc&query=${value}`,
        "type": "GET",
        "success": movie
    })
}

function movie(data) {
    for (i = 0; i < data.results.length; i++) {
        $("#result").append("<h2>" + data.results[i].original_title + "</h2" + '<br>' );
        $("#result").append('<p>' + data.results[i].overview + '</p>' + "<br>");
        path = data.results[i].poster_path
        value = data.results[i].backdrop_path
        buttons = `<button id="${data.results[i].backdrop_path}" class="backdrop_button"> Backdrop Image</button>`;
        $("#result").append("<div id='backdrop-img'>" + buttons + "<div id='backdrop'>" + "</div>" + "</div>" );
        backdrop_html = `<div class="backdrop-container"> <img src='https://image.tmdb.org/t/p/original${value}'> </div>`
        $("#result").append(backdrop_html);
        image_html =`<div class="image-container"> <img src='https://image.tmdb.org/t/p/w500/${path}'> </div>`
        $("#result").append(image_html);
    }
}



$(document).ready(setup)