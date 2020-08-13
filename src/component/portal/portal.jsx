import React from 'react'
import ReactDOM from 'react-dom'

const modalRoot  = document.getElementById('modal-root')  ;

class Modal extends React.Component{
    constructor( props ){
        super( props );
        this.el = document.createElement( 'div' );
    }

    componentDidMount(){
        modalRoot.appendChild( this.el )
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el );
    }

    render(){
        return ReactDOM.createPortal(
            this.props.children,
            this.el
            )
    }
}

const bar = {
    name : 'bar',
    foo(){
        console.log( this.name );
    }
}
const bar1 = {
    name : 'bar1',
    foo(){
        console.log( this.name );
    }
}
bar.foo = bar.foo.bind(bar1)

class Parent extends React.Component{

    constructor( props ){
        super( props );
        this.state = { clicks: 0 };
        this.name = 'parent'
        this.handleClick = this.handleClick.bind(this)
        this.foo = bar.foo;
    }

    handleClick() {
        console.log( this )
        this.foo();
        this.setState( {
            clicks: this.state.clicks + 1
        })
    }
    render(){
        return (
            <div onClick = {this.handleClick}>
                <p> Numbers of clicks :{ this.state.clicks }</p>
                <Modal>
                    <Child />
                </Modal>
            </div>
        )
    }
}

function Child() {
    // The click event on this button will bubble up to parent,
    // because there is no 'onClick' attribute defined
    return (
    <div className="modal">
        <button>Click</button>
    </div>
    );
}

export default Parent;