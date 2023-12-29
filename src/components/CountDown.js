import React, { useState, useEffect } from "react";
class CountDown extends React.Component {
    state = { count: 5 }

    componentDidMount() {
        this.timer = setInterval(() => {

            this.setState({ count: this.state.count - 1 });
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                this.props.onTimeUp();
                clearInterval(this.timer);
            }
        }
    } 
    render() {
        return (
            <div style={{ color: "white", background: "#282c34", height: "100vh" }}>
                <h1>Class: {this.state.count}</h1>
            </div>
        )
    }
}

const NewCountDown = (props) => {
    const [hookCount, setCount] = useState(5);  // Fix: Use parentheses, not square brackets

    useEffect(() => {
        if (hookCount === 0) {
            props.onTimeUp();
            return;
        }

        let timer = setInterval(() => {
            setCount(hookCount - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [hookCount, props]);

    return (
        <div>
            <h1>Hook: {hookCount}</h1>
        </div>
    );
}


export { CountDown, NewCountDown };