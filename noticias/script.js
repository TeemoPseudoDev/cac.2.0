document.addEventListener("DOMContentLoaded", function () {
    fetchHTML();
});

async function fetchHTML() { 
    try { 
        let res = await fetch('../elemnts/nav.html', {headers: { 'Content-Type': "text/html; charset=utf-8" } }); 
        let html = await res.text();
        let $header = document.getElementById("nav"); 
        $header.innerHTML = html; 
    } 

    catch (error) { 
        console.log(error) 
    } 
};
