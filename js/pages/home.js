$(function() {
    $('.modal').modal();
});

function getURLVars(){
    let vars    =   [];
    let hash;

    let hashes = window.location.href.slice(window.location.href.indexOf('?')+1).split('&');
    for(let i = 0; i < hashes.length; i++){
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}

var q   =   getURLVars()['q'];
var op  =   getURLVars()['op'];
if(q == 'success' && op == 'insert'){
    let toastHTML = "<span>Contact created coming From JS!</span>";
    let classList = "black darken-1";
    M.toast({
        html    :   toastHTML,
        classes :   classList
    });
}