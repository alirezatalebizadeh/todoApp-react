import React, { Component } from 'react'

export default class Note extends Component {
    //send id to delete it
    sendColorForDelete(id) {
        this.props.onTitle(id)
    }

    render() {
        let { id, title, bgColor } = this.props

        return (
            <div onClick={this.sendColorForDelete.bind(this, id)}
                className="col-12 col-sm-12 card shadow-sm rounded m-2"
                style={{ backgroundColor: bgColor }}>
                <p className="card-text p-3">{title}</p>
            </div>
        )
    }
}
