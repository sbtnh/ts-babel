// Relative path: This doesn't work
// import { hi, Person } from '../../common/utils';

// Webpack alias path: This doesn't work
// import { hi, Person } from 'common/utils';

// This works
import { hi, Person } from './utils';

const john: Person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(hi(john));
