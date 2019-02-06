// Relative path: This works! 
// Need to create a babel.config.js at the root of the solution
import { hi, Person } from 'common/utils';

// Webpack alias path: This doesn't work
// import { hi, Person } from 'common/utils';

// This works
// import { hi, Person } from './utils';

const john: Person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(hi(john));
