function receivesAFunction(callback) {
  callback()
}


function liftWeights() {
  console.log('Pump iron');
}

function returnsANamedFunction() {
  return liftWeights
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log(`Nom nom nom`);
  }
}
