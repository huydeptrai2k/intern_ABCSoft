import React from 'react';
import './App.css';
import TitleSection from './components/TitleSection';
import TodoSection from './components/TodoSection';
import OptionSection from './components/OptionSection';
import TodoListSection from './components/TodoListSection';
//import  './components/DateTimePicker.js'
function App() {
  return (
    <div className="ouput-container">
       <div className="ouput-sizer">
           <div className="result" id="result-div">
              <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
                <TitleSection />
                <TodoSection />
                <OptionSection ></OptionSection>
                <TodoListSection />
              </div>
           </div>
        </div>
    </div>
  );
}

export default App;
