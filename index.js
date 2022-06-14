function makeDinner(food){
    if (food = "veges"){
        return "Veges for dinner";
    }
}
function receivesAFunction(makeDinner){
    return (makeDinner());
}
function returnsANamedFunction(){
    return (makeDinner);
}
function returnsAnAnonymousFunction(){
    return function(){
        alert ("Welcome home!");
    }
}