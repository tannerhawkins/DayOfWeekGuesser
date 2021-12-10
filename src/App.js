import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import { ProgressBar, Step } from "react-step-progress-bar";
import "react-awesome-button/dist/themes/theme-blue.css";

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

const getDay = (day) => {
  switch (day) {
    case 0:
      return "Sunday"
    case 1:
      return "Monday"
    case 2:
      return "Tuesday"
    case 3:
      return "Wednesday"
    case 4:
      return "Thursday"
    case 5:
      return "Friday"
    case 6:
      return "Saturday"
    default:
      return "invalid"
  }
}

function App() {
  const defaultMin = new Date(1500, 0, 1);
  const defaultMax = new Date();
  const [minDate, setMinDate] = useState(defaultMin);
  const [maxDate, setMaxDate] = useState(defaultMax);
  const [date, setDate] = useState(defaultMax);
  const [lastAnswer, setLastAnswer] = useState();
  const [correctDay, setCorrectDay] = useState();
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  const generateNewDate = () => {
    setDate(randomDate(minDate, maxDate));
  };

  useEffect(generateNewDate, []);

  const handleClick = (guess) => {
    if(date.getDay() === guess) {
      setLastAnswer(true);
      setRight(right+1);
    } else {
      setLastAnswer(false);
      setWrong(wrong+1)
    }
    setCorrectDay(getDay(date.getDay()))
    generateNewDate();
  }

  return (
    <AppContainer className="App">
      <StyledHeader>Day of Week Guessing Game</StyledHeader>
      <StyledDate>{`${new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(date)} ${date.getDate()} ${date.getFullYear()}`}</StyledDate>
      <DayContainer>
        <StyledDay type="secondary" onPress={() => handleClick(0)}>Sunday</StyledDay>
        <StyledDay type="secondary" onPress={() => handleClick(1)}>Monday</StyledDay>
        <StyledDay type="secondary" onPress={() => handleClick(2)}>Tuesday</StyledDay>
        <StyledDay type="secondary" onPress={() => handleClick(3)}>Wednesday</StyledDay>
        <StyledDay type="secondary" onPress={() => handleClick(4)}>Thursday</StyledDay>
        <StyledDay type="secondary" onPress={() => handleClick(5)}>Friday</StyledDay>
        <StyledDay type="secondary" onPress={() => handleClick(6)}>Saturday</StyledDay>
      </DayContainer>
      <Footer>
      <Right>Correct: {right}</Right>
      <Response style={{color: lastAnswer ? "#17fc03" : "red"}}>
        {(lastAnswer === undefined) ? "" : lastAnswer ? `Correct! It was a ${correctDay}.` : `Incorrect. It was a ${correctDay}.`}
      </Response>
      <Wrong>Incorrect: {wrong}</Wrong>
      </Footer>
      <ProgressBar percent={50}/>
    </AppContainer>
  );
}

const StyledHeader = styled.h1`
  width: 50%;
  text-align: center;
`;

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Response = styled.h3`
`

const StyledDate = styled.h1``;

const DayContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px;
`;

const StyledDay = styled(AwesomeButton)`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
`;

const Footer = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: space-between;
`

const Right = styled.h3`
  color: "green";
`

const Wrong = styled.h3`
  color: "red";
`

export default App;
