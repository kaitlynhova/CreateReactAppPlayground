import React, { Component } from "react";
import Note from "./Note/Note";
import NoteForm from "./NoteForm/NoteForm";
import { DB_CONFIG } from "./Config/Config";
import firebase from "firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.db = firebase
      .database()
      .ref()
      .child("notes");

    this.state = {
      notes: []
    };

    this.addNote = this.addNote.bind(this);
    this.handleNewNote = this.handleNewNote.bind(this);

    this.db.on("child_added", this.handleNewNote);
  }

  handleNewNote(snap) {
    this.setState({ notes: [...this.state.notes, snap.val().noteContent] });
  }

  addNote(note) {
    debugger;
    this.db.push({ noteContent: note });
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <h1 className="heading">React + Firebase To Do List</h1>
        </div>
        <div className="notesBody">
          {this.state.notes.map((note, i) => {
            return <Note noteContent={note} noteId={i} key={i} />;
          })}
        </div>
        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
      </div>
    );
  }
}

export default App;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.addNote = this.addNote.bind(this);
//     this.app = new firebaseApp(DB_CONFIG); // firebaseApp.initializeApp(DB_CONFIG);

//     // this.db = firebase
//     //   .database()
//     //   .ref()
//     //   .child("notes");

//     this.state = {
//       notes: []
//     };
//   }
//   componentWillMount() {
//     const previousNotes = this.state.notes;
//     this.db.on("child_added", snap => {
//       console.log("ooo em gee", snap);
//       // previousNotes.push({
//       //   id: snap.key,
//       //   noteContent: snap.val().noteContent
//       // });
//       // this.setState({
//       //   notes: previousNotes
//       // });
//     });
//   }
//   addNote(noteContent) {
//     debugger;
//     this.db.push({ noteContent }); //.set({ noteContent: note });
//   }
// }

// export default App;
