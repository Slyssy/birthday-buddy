import React from 'react';
import Person from './Person';

const List = ({ people }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
  return <div>List</div>;
};

export default List;
