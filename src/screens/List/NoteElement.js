import React from "react";

export default class NoteElement extends React.Component {
  state = {
    title: this.props.note.title,
    text: this.props.note.text,
  }
  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value })
  }
  handleChangeText = (event) => {
    this.setState({ text: event.target.value })
  }
  headerPlacement = () => {
    const { title, text } = this.state;
    const { isEdit, isDone, id } = this.props.note;

    this.props.changeNote(title, text, isEdit, !isDone, id);
    this.props.onHeader && this.props.deleteNote(id)
  }
  editButton = () => {
    const { title, text } = this.state;
    const { isEdit, isDone, id } = this.props.note;

    this.props.changeNote(title, text, !isEdit, isDone, id);
  }
  checkBoxHandle = () => {
    const { isDone } = this.props.note;
    return this.props.onHeader ? <svg onClick={this.headerPlacement} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></svg> : (isDone ? <svg onClick={this.headerPlacement} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
      : <svg onClick={this.headerPlacement} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>)

  }
  deleteIconHandle = () => {
    const { id } = this.props.note;
    return this.props.onHeader ?
      <svg onClick={() => this.props.deleteNote(id)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
      :
      <svg onClick={() => this.props.deleteNote(id)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
  }
  editIconHandle = () => {
    const { id } = this.props.note;
    return this.props.onHeader ?
      <svg className="headerEditButton" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"></svg>
      :
      <svg onClick={this.editButton} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
  }

  render() {
    const { title, text } = this.state;
    const { isEdit, isDone, id } = this.props.note;

    return (
      <div key={id} className={isEdit ? "noteEdit" : (isDone ? "noteDone" : "noteNormal")}>
        <div className="flexRow">
          <div className="icon" >{this.checkBoxHandle()}</div>
        </div>
        <div className="flexColumn">
          <div className="headerText" >{isEdit ? <input className="inputHeader" value={title} onChange={this.handleChangeTitle} /> : title}<br /></div>
          <div className="descrText" >{isEdit ? <textarea className="inputDescr" value={text} onChange={this.handleChangeText} /> : text}</div>
        </div>
        <div className="flexRow">
          <div className="icon">
            {this.editIconHandle()}
          </div>
          <div className="icon">
            {this.deleteIconHandle()}
          </div>
        </div>
      </div>
    )
  }
}
