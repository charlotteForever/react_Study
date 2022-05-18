import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            // 如果是箭头函数的话，this就是Squre对象
            // 每次在组件中调用 setState 时，React 都会自动更新其子组件。
            <button className="square" onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squres: new Array(9).fill(null)
        }
    }

    // 点击之后修改对应的squre
    handleClick(i) {
        // 创建一个副本
        const squres = this.state.squres.slice()
        squres[i] = "X"
        this.setState({ squres: squres })
        // this.setState({this.state.squres[i]:"X"})
    }

    // squres传给子组件，并传递函数用来对squre进行改变
    renderSquare(i) {
        return <Square value={this.state.squres[i]} onClick={() => this.handleClick(i)} />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
