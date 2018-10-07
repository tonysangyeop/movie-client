import React from 'react';
import {Route, Link} from 'react-router-dom'
const App = () => (
  <div>
    <Header />
  </div>
);

const Header = () => (
    <header>
      <h1>My Contact</h1>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>

      <Route exact path="/" component={Welcome} />
      <Route path="/contacts" component={Contacts} />
    </header>
)

const Welcome = () => (
  <h1>Welcome to the best contacts app!</h1>
)

const Contacts = ({match}) => (
  <div>
    <ul>
      <li><Link to="/contacts/lynn">Lynn</Link></li>
      <li><Link to="/contacts/korea">Korea</Link></li>
      <li><Link to="/contacts/japan-guy">Japan Guy</Link></li>
    </ul>

    <Route 
      exact 
      path={`${match.path}`} 
      render={() => <h3>Please select contacts</h3>} />

    <Route
      exact
      path={`${match.path}/:contactName`}
      component={Contact} />

  </div>
)

const Contact = ({match}) => `Your friend name is ${match.params.contactName}`;


export default App;
