import React, { Component } from "react";
import logo from "./logo.svg";
import Note from "./Note/Note";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [{ id: 1, noteContent: "1" }, { id: 1, noteContent: "2" }]
    };
  }
  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <h1 className="heading">React + Firebase To Do List</h1>
        </div>
        <div className="notesBody">
          {this.state.notes.map(note => {
            return (
              <Note
                noteContent={note.noteContent}
                noteId={note.id}
                key={note.id}
              />
            );
          })}
        </div>
        <div className="notesFooter">
          <p>Footer will go here</p>
        </div>
      </div>
    );
  }
}

export default App;
