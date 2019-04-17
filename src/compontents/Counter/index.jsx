import React from 'react'
import {observer,inject} from 'mobx-react';
import './style.scss'

@inject("counterStore") 
@observer
class Counter extends React.Component {
    render() {
        let {num} = this.props.counterStore;
        return <div className='page'>
            <h1 className='title'>counter</h1>
            <h1 className='num'>{num}</h1>
            <div className='box'>
                <button className='btn' onClick={()=>{this.props.counterStore.add()}}>add one</button>
                <button className='btn' onClick={()=>{this.props.counterStore.minus()}}>minus one</button>
            </div>
        </div>
        
    }
}
export default Counter