import {PropTypes, Component} from 'react'

class Provider extends Component {
    getChildContext(){
        return {
            store: this.props.store
        }
    }

// Provider也是一个React组件，不过它的render函数就是简单地把子组件渲染出来，在渲染上，Provider不做任何附加的事情。
// 每个React组件的props中都可以一个特殊属性children，代表的是子组件，比如这样的代码，在Provider的render函数中
// this.props.children就是两个Provider标签之间的<ControlPanel/>
    render(){
        return this.props.children
    }
}

//  为了让Provider能够被React认可为一个Context的提供者，还需要指定Provider的childContextTypes属性
Provider.childContextTypes = {
    　store: PropTypes.object
};

export default Provider