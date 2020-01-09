import React from 'react';
import Checkbox from '../FormElements/Checkbox';
import Label from '../Labels/Label';
import PropTypes from 'prop-types';

class Messages extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    render() {
        return (
            <div>
                { 
                 this.props.data.map( (message) => (
                    <div key={ message.id } 
                        id={ message.id } 
                        className={ `row message ${ message.read ? 'read' : 'unread' } ${ message.isChecked ? 'selected': '' }` }>
                        <div className="col-xs-1">
                            <div className="row">
                                <div className="col-xs-2">
                                    <Checkbox isSelected={ message.isSelected } name={ message.id } onCheckboxChange={ this.props.highlightRow }/>
                                </div>
                                <div className="col-xs-2">
                                    <i className={ `star fa ${ message.starred ? 'fa-star' : 'fa-star-o' }` }></i>
                                </div>
                            </div>
                        </div>        
                        <div className="col-xs-11">
                            { message.labels.map( (label,i) => <Label key={i} label={label} /> ) }
                            <a href="#">
                                { message.message }
                            </a>
                        </div>
                    </div>
                  ))
                }
            </div>
        )
    }
}

Messages.propTypes = {
    messagesArr: PropTypes.array,

    // An object taking on a particular shape
    messagesArrWithStrictShape: PropTypes.exact({
        id: PropTypes.number,
        read: PropTypes.bool,
        isChecked: PropTypes.bool,
        starred: PropTypes.bool,
        labels: PropTypes.array,
        message: PropTypes.string,
      }),   
}

export default Messages