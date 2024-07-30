import React from 'react';
import Counter from './basic/components/Counter';

export default class AppClass extends React.Component() {
  state = { count: 0 };

  onclick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    // 처음 마운트될 때
    console.log('컴포넌트가 마운트 되었음');
  }

  componentWillUnmount() {
    console.log('컴포넌트가 곧 언마운트될 예정!');
  }

  // 상태가 변경될 때마다 렌더 부분만 업데이트!
  render() {
    return (
      <div className='container'>
        <div className='banner'>
          Total Count: {this.state.count} {this.state.count > 10 ? '❤️‍🔥' : '🌱'}
        </div>
        <div className='counters'>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
