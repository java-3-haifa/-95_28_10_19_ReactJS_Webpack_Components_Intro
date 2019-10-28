import React from 'react';

export default class extends React.Component {
    constructor(props){
        super(props);
        // this.cnt = 100;
        // this.inc = this.inc.bind(this);
        this.state = {
            cnt:this.props.current
        }
    }

    inc(){
        // this.state.cnt++;
        this.setState({
            cnt: this.state.cnt + 1
        });
        console.log(this.state.cnt);
    }
    render() {
        return (
            <div>
                <p>{this.state.cnt}</p>
                <button onClick={() => this.inc()}>Add</button>
            </div>
        );
    }
}
