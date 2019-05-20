import React from 'react';

class ContactList extends React.Component {
  render() {
    // Defining the props available to be passed in for this component. 
    const people = this.props.contacts;
    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
function App() {
  return (
    <div className="App">
      <ContactList contacts={[ //prop with name contacts allows us to pass data in to the individual component
      {name: "Bob"},
      {name: "Harry"},
      {name: "Sally"}
    ]}/>
      <ContactList contacts={[
      {name: "Will"},
      {name: "Savannah"},
      {name: "Kara"}
    ]}/>
    </div>
  );
}

export default App;
