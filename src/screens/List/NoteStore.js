import { observable, decorate, action } from 'mobx';
import { sendData } from '../../logic/sendData';

//
//
//
//
//

class NoteStore {

  notesJsonArray = [];

  isHeaderChanged = false;

  getNotesArray = () => {
    sendData("GET", "tasks")
      .then(response => this.notesJsonArray = response.reverse())
      .catch(error => console.log('error ', error))
  }

  createNote = (header, text) => {
    let body = {
      isEdit: false,
      isDone: false,
      title: header,
      text: text,
    }
    console.log("createNote: body - ", body)
    sendData("POST", "tasks", body)
      .then(result => { this.getNotesArray() })
      .catch(error => console.log('error ', error))
  }

  changeNote = (header, text, editing, done, id) => {
    let body = {
      isEdit: editing,
      isDone: done,
      title: header,
      text: text,
      id: id
    }
    sendData("PUT", "tasks", body)
      .then(result => { this.getNotesArray() })
      .catch(error => console.log('error ', error))
  }

  deleteNote = (id = 0) => {
    sendData("DELETE", "tasks/" + id)
      .then(result => { this.getNotesArray() })
      .catch(error => console.log('error ', error))
  }

  onHeaderTrigger = () => {
    this.isHeaderChanged = !this.isHeaderChanged;
  }

}

//
//
//
//
//

const a = decorate(NoteStore, {
  notesJsonArray: observable,
  isHeaderChanged: observable,
  getNotesArray: action,
  onHeaderTrigger: action,

})


export default new a()