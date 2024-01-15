//const name = 'Rajesh Hamal';

let name = 'Haku Kaale';

function printName() {
  console.log(name); //access from the outside scope
}

printName();

name = 'xyz';

printName();