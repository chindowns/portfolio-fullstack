// hold value of current displayed section/article element.
var hide = "#about";

// Listeners
$('#nav-projects').click(function () {
    if (hide !== "#projects") {
        $(hide).hide('slow');
        $('#projects').show('slow');
        hide = "#projects";
    }
});

$('#nav-about').click(function () {
    if (hide !== '#about') {
        $(hide).hide('slow');
        $('#about').show('slow');
        hide = '#about';
    }
});

$('#nav-blog').click(function () {
    if (hide !== '#blog') {
        $(hide).hide('slow');
        $('#blog').show('slow');
        hide = '#blog';
    }
});


// Display blogs from Medium

$(function () {

    var data = {
        rss_url: 'https://medium.com/feed/@chindowns'
    };

    $.get('https://api.rss2json.com/v1/api.json', data, (response) => {
        if (response.status === 'ok') {
            
            $.each(response.items, function (index, item) {
                title = `<h3><a href="${item.link}">${item.title}</a></h3>
                 <p>${item.description}</p>`;
                 return index < 4;
            });
            $('#blog').html(title);
        }
    });
});