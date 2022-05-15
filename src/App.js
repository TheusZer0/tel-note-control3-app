import './App.css';
import { Navbar } from './components/Navbar';
import { NoteForm } from './components/NoteForm';


function App() {
  return (
    <><div className="App" />

      <header>
      <Navbar></Navbar>
      </header>

      <body>
        <NoteForm></NoteForm>
      </body>

    </>
  );
}

export default App;
