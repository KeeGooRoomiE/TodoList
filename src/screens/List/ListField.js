import React from 'react';
import '../../App.css';
import NoteElement from './NoteElement';

//
//
//
//
//

export default class ListField extends React.Component {
  render() {
    let noteList = this.props.noteList;
    const changeNote = this.props.changeNote;
    const deleteNote = this.props.deleteNote;

    return (
      noteList.map((note) => {
        return (
          <NoteElement
            note={note}
            changeNote={changeNote}
            deleteNote={deleteNote}
            key={note.id}
          />
        )
      })
    )
  }
}

//
//
//
//
//