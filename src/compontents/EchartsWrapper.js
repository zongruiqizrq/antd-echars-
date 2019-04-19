import ReactEcharts from 'echarts-for-react';
import * as React from 'react';

let echartLastStart = null
let echartLastEnd = null

export default class EchartsWrapper extends React.Component {
 


    //  shouldcomponentUpdate(nextProps) {
    //     // if (JSON.stringify(nextProps) !== JSON.stringify(this.props)) {
    //     //     return true
    //     // }
    //     // return false
    // }
 componentDidMount() {
        // this.inter = setInterval( () => {
        //    if (this.echarts) {
        //        const instance = this.echarts.getEchartsInstance();
        //    }
        //}, 100);
        
    }

    componentWillUnmount() {
        // if (this.inter) {
        //     clearInterval(this.inter);
        // }    
    }

     render() {
        const onEvents = {
            datazoom: (action) => {
                if (Number.isFinite(action.start)) {
                    echartLastStart = action.start
                    echartLastEnd = action.end
                } else if (
                    action.batch &&
                    action.batch.length &&
                    Number.isFinite(action.batch[0].start) &&
                    Number.isFinite(action.batch[0].end)
                ) {
                    echartLastStart = action.batch[0].start
                    echartLastEnd = action.batch[0].end
                }
            },
        }
        const option = this.props.option || {}

        if (
            Number.isFinite(echartLastStart) &&
            option.dataZoom &&
            option.dataZoom.length &&
            Number.isFinite(option.dataZoom[0].start) &&
            Number.isFinite(option.dataZoom[0].end)
        ) {
            option.dataZoom[0].start = echartLastStart
            option.dataZoom[0].end = echartLastEnd
        }

        return (
            <ReactEcharts
                ref={(e) => this.echarts = e}
                style={this.props.hasOwnProperty('style') ? this.props.style : null}
                option={option}
                notMerge={this.props.hasOwnProperty('notMerge') ? this.props.notMerge : true}
                lazyUpdate={this.props.hasOwnProperty('lazyUpdate') ? this.props.lazyUpdate : true}
                onEvents={this.props.hasOwnProperty('onEvents') ? {...onEvents, ...this.props.onEvents} : onEvents}
            />
        )
    }
}
