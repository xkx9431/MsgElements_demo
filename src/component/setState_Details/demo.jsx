import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        count: 0
        }
    }

    render() {
        return <button onClick={()=> {
        setTimeout(()=> {
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
        }, 0);
        }}>{this.state.count}</button>
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
            this.setState({count: this.state.count + 1});
            console.log(this.state.count);
        }, 0);
    }
}

export default Count;
