import { Component } from 'react'
import './App.css';

const data = [
  {
    id: 1,
    title: "Message nr 1",
    content: "Message content no 1..."
  },
  {
    id: 2,
    title: "Message nr 2",
    content: "Message content no 2..."
  }
]

setInterval(() => {
  let index = data.length + 1;
  data.push({
    key: index,
    title: `Message nr ${index}`,
    content: `Message content no ${index}...`
  })
}, 3000)


class App extends Component {

  state = {
    comments: [...data],
  }

  getData = () => {
    if (newComments.length !== this.state.comments.length) {
      this.setState({
        comments: newComments,
      })
    }
  }
  
  componentDidMount() {
   this.intervalIndex = setInterval(this.getData, 5000)
  }
  componentWillUnmount(){
    clearInterval(this.intervalIndex);
  }
  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h3>{comment.title}</h3>
        <div>{comment.content}</div>
      </div>))
    return (
      <div className="App">{comments.reverse()}</div>
    );
  }
}

export default App;
