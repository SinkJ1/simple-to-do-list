import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import TaskTablePresenter from './components/presenters/task-table/task-table-presenter';

interface Props {
  store: any
}

function App({ store }: Props) {
  return (
    <>
      <Provider store={store}>
        <TaskTablePresenter />
      </Provider>
    </>
  )
}

export default App;
