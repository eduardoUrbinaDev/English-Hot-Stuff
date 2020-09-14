import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import QuestionApp from './components/QuestionApp';
import VerbsApp from './components/VerbsApp';
import Navbar from './components/Navbar';
import StudentName from './components/StudentName';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title">Speaking Exam Basic 3 and Basic 4</h1>
        <Navbar />
        <Switch>
          <Route path="/questions">
            <QuestionApp />
          </Route>
          <Route path="/verbs">
            <VerbsApp />
          </Route>
        </Switch>
      </div>
      <StudentName />
    </Router>
  );
};

export default App;
