function init() {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vQsfFljTGreVW5JW2oyWVHRm_47VVzfUc0c08Q3hqf5OZknQEDkQaOe-2eYCTv5Ob2do0g5g-skWRuN/pub?gid=0&single=true&output=csv', {
            download: true,
            header: true,
            complete: showInfo
        })
}
window.addEventListener('DOMContentLoaded', init)

function showInfo(results) {
    var data = results.data
    console.log(data)

    //data.forEach(function(result){
        //console.log(result.Name)
        //console.log(result.SUM)
    //})

    var dict = data.map(function(result){
        return [result.Name, result.Pack, result.USN]
    })

    var randomNumber = Math.floor(Math.random()*dict.length);
    console.log(randomNumber);
    var star = dict[randomNumber];

    sname = star[0];
    spack = star[1];
    sbranch = star[2];

    if(spack == 0) {
    spack = "<h3> unknown </h3>";
    }

    console.log(sname)
    console.log(spack)
    console.log(sbranch)

    var space = document.getElementById('starname');
    space.innerHTML = sname + '<br> <hr> <h3> ' + sbranch + '</h3>';
    var spaces = document.getElementById('starpack');
    spaces.innerHTML = spack+'<p> LPA</p>';
}

// auto refresh
function autoRefresh() {
        window.location = window.location.href;
    }
    setInterval('autoRefresh()', 4000);
