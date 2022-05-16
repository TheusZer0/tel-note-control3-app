import './App.css';
import { Navbar } from './components/Navbar';
import  NoteForm  from './components/NoteForm';
import NotesLists from "./components/NotesLists";
import OneNote from "./components/OneNote";
import UpdateNote from "./components/UpdateNote";


import {useEffect, useState} from 'react'
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

    const [loaded, setLoaded] = useState(false)
    const [notesData, setNotes] = useState()

    useEffect(() => {
        const fetchData = async () => {
            if(!loaded) {
                const result = await axios.get('http://localhost:8080/get-all-notes')
                if (result) {
                    setLoaded(true)
                    setNotes(result.data)
                }
            }
        }
        fetchData()
    })

    const [notesDataForm, setDataForm] = useState("")

  return (
      <Router>
          <Navbar></Navbar>
          <Routes>
              <Route path="/" element={
                  <NotesLists notes={notesData}></NotesLists>
              } />
              <Route path="/get-all-notes" element={
                  <NotesLists notes={notesData}></NotesLists>
              } />
              <Route path="/create-note" element={
                  <NoteForm notesDataForm={notesDataForm} setDataForm={setDataForm}></NoteForm>
              } />
              <Route path="/get-note/:id" element={<OneNote></OneNote>}
               />

              <Route path="/edit-note/:id" element={
                  <UpdateNote></UpdateNote>
              }
              />

              <Route path="*" element={<NotesLists />} />
          </Routes>
      </Router>

  );
}

// <NotesLists notes={notesData}></NotesLists>
export default App;
