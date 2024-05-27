document.addEventListener("DOMContentLoaded", function () {
    
    fetchHTML();

    var board = document.getElementById('ajedrez');
    var squares = [];

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var square = document.createElement('div');
            square.className = ((i + j) % 2 == 0) ? 'white' : 'black';
            board.appendChild(square);
            squares.push(square);
        }
    }
});

async function fetchHTML() { 
    try { 
        let res = await fetch('/elemnts/nav.html', {headers: { 'Content-Type': "text/html; charset=utf-8" } }); 
        let html = await res.text();
        let $header = document.getElementById("nav"); 
        $header.innerHTML = html; 
    } 

    catch (error) { 
        console.log(error) 
    } 
};
