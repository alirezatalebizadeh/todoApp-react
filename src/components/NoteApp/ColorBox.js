import React, { Component } from 'react'

export default class ColorBox extends Component {

    //sending color of box to set background-color
    sendColor(color) {
        this.props.onColor(color)
    }

    render() {
        let { color } = this.props
        // console.log(this.props);
        return (
            <div onClick={this.sendColor.bind(this, color)} className='color-box' style={{ backgroundColor: color }}>
            </div>
        )
    }
}
