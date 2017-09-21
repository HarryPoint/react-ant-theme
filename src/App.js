import React from 'react';
import { DatePicker, Button } from 'antd';
class App extends React.Component {
  render () {
    return (<div>
      <h1>React</h1>
      <Button type="primary">Primary</Button>
      <DatePicker></DatePicker>
    </div>)
  }
}

App.propTypes = {};

export default App;