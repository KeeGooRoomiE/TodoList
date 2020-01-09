import React from 'react';
import { observer } from "mobx-react";
import NoteStore from './NoteStore';
import ListField from './ListField';
import NotesHeader from './NotesHeader';
import '../../App.css';

//
//
//
//
//

class Main extends React.Component {
    componentDidMount() {
        NoteStore.getNotesArray();
    }

    render() {
        const notesList = NoteStore.notesJsonArray;
        return (
            <div>
                <NotesHeader
                    isTriggered={NoteStore.isHeaderChanged}
                    onClick={NoteStore.onHeaderTrigger}
                    changeNote={NoteStore.createNote}
                />
                <ListField
                    noteList={notesList}
                    changeNote={NoteStore.changeNote}
                    deleteNote={NoteStore.deleteNote}
                />
            </div>
        )
    }
}
export default observer(Main);