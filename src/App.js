import React from 'react';
import './App.css';
import { GlobalProvider } from './context/GlobalState'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import QuestionApp from './components/QuestionApp';
import VerbsApp from './components/VerbsApp';
import Navbar from './components/Navbar';
import StudentName from './components/StudentName';
import Students from './components/Students';

function App() {

  return (
    <GlobalProvider>
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
            <Route path="/students">
              <Students />
            </Route>
          </Switch>
        </div>
        <StudentName />
      </Router>
    </GlobalProvider>
  );
};

export default App;
