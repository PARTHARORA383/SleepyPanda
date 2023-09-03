import React, { Component } from 'react'
import Rolling from './Rolling.gif'


export default class Spinner extends Component {
  render() {
    return (
      <div>
        <img src ={Rolling}/>
      </div>
    )
  }
}
