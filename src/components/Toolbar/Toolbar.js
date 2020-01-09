import React from 'react'

class Toolbar extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         enableBtns: "disabled"
    //     }
    //     this.enableBtns = this.enableBtns.bind(this);
    //   }

    render () {
        return (
            <div className="row toolbar">
                <div className="col-md-12">
                    <p className="pull-right">
                    <span className="badge badge">2</span>
                    unread messages
                    </p>

                    <button className="btn btn-default">
                    <i className="fa fa-square-o"></i>
                    </button>

                    <button className="btn btn-default" disabled={ `${ !this.props.toggleEnable ? 'disabled': '' }` }>
                    Mark As Read
                    </button>

                    <button className="btn btn-default" disabled={ `${ !this.props.toggleEnable ? 'disabled': '' }` }>
                    Mark As Unread
                    </button>

                    <select className="form-control label-select" disabled={ `${ !this.props.toggleEnable ? 'disabled': '' }` }>
                    <option>Apply label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                    </select>

                    <select className="form-control label-select" disabled={ `${ !this.props.toggleEnable ? 'disabled': '' }` }>
                    <option>Remove label</option>
                    <option value="dev">dev</option>
                    <option value="personal">personal</option>
                    <option value="gschool">gschool</option>
                    </select>

                    <button className="btn btn-default" disabled={ `${ !this.props.toggleEnable ? 'disabled': '' }` }>
                    <i className="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Toolbar