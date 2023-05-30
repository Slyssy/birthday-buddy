import { useState } from 'react';
import List from './assets/components/List';
import data from './data.js';
const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today.</h3>
        <List people={people} />
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
