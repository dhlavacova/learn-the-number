// ukazka karty s cislem,
//jake cislo je na obrazku tolikrat kliknout a zobrazit nejaky obrazek
//if (pocet obrazku se rovna (cislo na karte) jde dal


let body = 0;
let c;

$(function () {
    PridejRybu();
    NahodneCislo();

    SmazRybu();
    OdesliDoDatabaze();

    $('p').css({"color": "red"});
});


function NahodneCislo() {
    c = Math.round(Math.random() * (8 - 1)) + 1;

    $('#NahodneCislo').append('<img src="picture/' + c + 'cislo.svg" height="70" width="175">');
    $('#odesli').on('click', function () {
        if (c !== PocetRyb()) {
            alert('Is not correct');
            return;
        }

        $(".rybnik").empty();
        body++;
        $('p').text('Correct answers: ' + body);
        c = Math.round(Math.random() * (8 - 1)) + 1;

        $('#NahodneCislo').empty().append('<img src="picture/' + c + 'cislo.svg" height="70" width="175">');
    });
}

function PridejRybu() {
    $('.ryba').on('click', function () {
        if (PocetRyb() >= 10) {
            return;
        }
        $(this).clone().appendTo($('.rybnik'));
    });
}

function SmazRybu() {
    $(".rybnik").click(function () {
        $(this).find('.ryba').last().remove();
    });
}

function PocetRyb() {
    return $(".rybnik").find('img').length;
}

function OdesliDoDatabaze() {
    $("#Databaze").on('click', function (event) {
        event.preventDefault();
        $.ajax({
            type:'POST',
            url:"Php_DB/EmilkaDB.php",
            data:{body:body},
        })
        // $.post("Php_DB/EmilkaDB.php", {body: body});
        body=0;
        $('p').text('Correct answer: 0');

    });



}