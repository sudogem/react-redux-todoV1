import React from 'react'
import { Provider } from 'react-redux'

import ConnectedTodoList from './containers/ConnectedTodoList.jsx'
import AppTitle from './AppTitle.jsx';

import { Container, Grid } from 'semantic-ui-react'

const wrapper = {
  marginTop: "2em"
}

const App = ({ store }) =>
  <Provider store={store}>
    <div style={wrapper} >
      <Container>
        <Grid>
          <Grid.Column width={4}></Grid.Column>
          <Grid.Column width={8}>
            <AppTitle name="Todo App" />
            <ConnectedTodoList />
          </Grid.Column>
          <Grid.Column width={4}></Grid.Column>
        </Grid>
      </Container>
    </div>
  </Provider>

export default App
