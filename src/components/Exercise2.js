import React from 'react';

class Exercise2 extends React.Component {
  state = {
    users: [
      { id: 1, name: 'Leanne Gragam' },
      { id: 2, name: 'Ervin Howell' },
      { id: 3, name: 'Clementine Bauch' },
      { id: 4, name: 'Patricia Lebsack' }
    ]
  };

  render() {
    const renderedUsers = this.state.users.map(({ id, name }) => {
      return <li key={id}>{name}</li>
    });

    return (
      <div className="exercise-2">
        <ul>{renderedUsers}</ul>
      </div>
    );
  }
}

export default Exercise2;