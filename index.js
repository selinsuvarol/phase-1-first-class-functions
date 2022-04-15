const receivesAFunction = callback => callback();
const returnsANamedFunction = () => function aNamedFunction(){};

function returnsAnAnonymousFunction(){
    return function(){};
}