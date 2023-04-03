const apiKey = '4426457f8b4b41209b05eb08a4cb9230';
const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}';

fetch(url)
    .then(response => response.json())
    .then(data => {
        $(document).ready(function () {
            $.getJSON(url, function (data) {
                console.log(data);
                var articles = data.articles;
                var output = "";
                for (var i in articles) {
                    output += "<div class='article'>";
                    output += "<h2>" + articles[i].title + "</h2>";
                    output += "<p>" + articles[i].description + "</p>";
                    output += "</div>";
                }
                $("#news").html(output);
            });
            console.log(data.articles); // array de objetos de notícias
        })
            .catch(error => {
                return 'Erro ao carregar as notícias: ', error;
            });
    });