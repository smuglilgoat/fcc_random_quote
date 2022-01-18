import "./App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      quoteData: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quoteData: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleClick() {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          quoteData: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const { error, isLoaded, quoteData } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
        <header className="App-header" >
          <Card bg="dark" text="white"  border="white" id="quote-box">
            <Card.Body className="text-center">
              <blockquote className="blockquote mb-0" id="text">
                <p>
                  {" "}
                  {quoteData.content}{" "}
                </p>
                <footer className="blockquote-footer" id="author">
                  <cite>{quoteData.author}</cite>
                </footer>
              </blockquote>
              <div className="button-flex">
              <a href="http://twitter.com/intent/tweet" id="tweet-quote"><Button variant="info">💬</Button></a>
                <Button variant="secondary" onClick={this.handleClick} id="new-quote">Next Quote</Button>
              </div>
            </Card.Body>
          </Card>
        </header>
      </div>
      );
    }
  }
}

export default App;
