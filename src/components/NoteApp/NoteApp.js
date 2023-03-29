import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'
import { AiOutlinePlus } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';


export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
    }

    // select title handler
    titleHandler(event) {
        this.setState({
            noteTitle: event.target.value
        })
    }


    //add note to dom
    addTodo() {
        if (this.state.noteTitle) {
            let newNote = {
                id: this.state.notes.length + 1,
                title: this.state.noteTitle,
                bgColor: this.state.inputColor
            }
            this.setState(prevState => {
                return {
                    notes: [...prevState.notes, newNote],
                    noteTitle: ''
                }
            })
            console.log(...this.state.notes);
        } else {
            alert('لطفا یادداشت خود را ثبت نمایید')
        }
    }


    //remove note
    removeNote(id) {
        let newNotes = [...this.state.notes]

        newNotes = newNotes.filter(note => {
            return note.id !== id
        })

        this.setState({
            notes: [...newNotes]
        })
    }

    //empty input and change background
    resetInput() {
        this.setState({
            noteTitle: '',
            inputColor: '#fff'
        })
    }

    //set color
    setColor(color) {
        this.setState({
            inputColor: color
        })
    }


    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">اپلیکیشن یادداشت خوارزمی</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input onChange={this.titleHandler.bind(this)} value={this.state.noteTitle} id="input-field" className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="یادداشت خود را تایپ نمایید" />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color => (
                                                <ColorBox onColor={this.setColor.bind(this)} color={color} key={color} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" onClick={this.addTodo.bind(this)} className="btn btn-outline-info"><AiOutlinePlus /></button>
                                        <button id="btn-delete" type="button" onClick={this.resetInput.bind(this)} className="btn btn-outline-danger"><FaTrash /></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className=" p-1 card-columns">
                                                {this.state.notes.length ? this.state.notes.map(note => (
                                                    <Note onTitle={this.removeNote.bind(this)} {...note} key={note.id} />
                                                )) : (
                                                    <h1>لطفا یادداشت خود را تایپ نمایید</h1>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </>
        )
    }
}
