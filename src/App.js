import './App.css';
import React  from 'react';
import Img from './cv.png';


class App extends React.Component {

  state = {
    Person: {
      fullName: "Nadhem Elkamel",
      bio: "Beginner Full-Stack developer with small experience in HTML, CSS, Javascript and React.",
      imgSrc: Img,
      profession: "Full-Stack Developer"
    },
    show: true
  };
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      4000 //le nombre que vous saisissez c'est le time interval
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };


  render() {
    return (
      <>
        {this.state.show && (
          <>
            <img src={this.state.Person.imgSrc} alt='MyImage' className='center'></img>
            <h1>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.profession}</h2>
            <p>{this.state.Person.bio}</p>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
);
}
}

export default App;
