import React from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import Messages from './components/Messages/Messages';

/*
Component Hierarchy
  An App component
  A Messages (or MessageList) component
  A Message component
  A Toolbar component
*/

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { id: 1, read: false, isChecked: false, starred: false, labels: ["dev", "personal"], message: 'Message defaul state'},
        { id: 15, read: false, isChecked: false, starred: false, labels: [], message: 'Message id 15'},
        { id: 3, read: true, isChecked: false, starred: true, labels: [], message: 'Message id 3'}
      ],
      enableToolbar: false,
    }
    this.highlightRow = this.highlightRow.bind(this)
    this.enableToolbarButtons = this.enableToolbarButtons.bind(this)
  }

  enableToolbarButtons() {
    this.setState({ enableToolbar: ( this.state.messages.filter(msg => msg.isChecked === true).length > 0 ) ? true : false })
  }
  /*
  *  Highlight selected rows
  */
  highlightRow( event ) {
    const msgId = event.target.value;
    const messageObj = this.state.messages.find(({ id }) => id === Number(msgId) )
    
    const indexOfMessage = this.state.messages.indexOf(messageObj);

    this.setState({ 
      messages: [
          ...this.state.messages.slice(0, indexOfMessage),
          Object.assign({}, messageObj, {isChecked: (messageObj.isChecked == false) ? true : false }),
          ...this.state.messages.slice(indexOfMessage + 1) 
        ] 
      }, () => {
        this.enableToolbarButtons()
       // console.log(this.state)
      })
  }

    
  
  render () {
    return (
      <div className="App">
        <Toolbar toggleEnable={ this.state.enableToolbar }/>
        <Messages 
          data={ this.state.messages } 
          highlightRow={ this.highlightRow } />
      </div>
    );
  }
}
