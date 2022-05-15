import './App.css';
import { Navbar } from './components/Navbar';
import  NoteForm  from './components/NoteForm';
import NotesLists from "./components/NotesLists";

import {useEffect, useState} from 'react'
import axios from "axios";

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

  return (
    <div>
        <div className="App" />

      <header>
      <Navbar></Navbar>
      </header>

      <body>
        <NoteForm></NoteForm>
        <NotesLists notes={notesData}></NotesLists>
      </body>
    </div>

  );
}

export default App;
