import React from "react";
import { observer } from 'mobx-react';
import NoteElement from "./NoteElement";

class NotesHeader extends React.Component {
  render() {
    const createNote = this.props.changeNote; //func
    const isTriggered = this.props.isTriggered; //bool
    const onTrigger = this.props.onClick;        //func
    const noteBody = { isEdit: true, isDone: false, title: "Шапка", text: "Описание" }  //body
    if (isTriggered) {
      return (
        <div>
          <NoteElement
            note={noteBody}
            changeNote={createNote}
            deleteNote={onTrigger}
            onHeader={true}
          />
        </div>)
    } else {
      return (
        <div className="headerNormal">
          <div className="leftIcon" onClick={onTrigger}><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg></div>
          <div className="headerText"> Todo List </div>
        </div>)
    }
  }
}

export default observer(NotesHeader);
