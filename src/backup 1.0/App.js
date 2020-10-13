import React, {useState} from 'react';
import TitleTable from './components/TitleTable';
import AddTForm from './components/AddTForm';
import { v4 as uuidv4 } from 'uuid';
import EditTitleForm from './components/EditTitleForm';




function App() {

 const titlesData = [
//{ id: uuidv4(), title: 'Gta 5', company: 'Rockstar' },
//{ id: uuidv4(), title: 'Lol', company: 'Riot' },
//{ id: uuidv4(), title: 'Sekiro', company: 'Capcom' },
  ]


  //state

  const [titles, setTitles] = useState(titlesData);

  //add titles

  const addTitle = (title) => {
      title.id = uuidv4()
      setTitles([

        ...titles,
      title

      ])
      
  }

  //delete title
  const deleteTitle = (id) => {
    setTitles(titles.filter((title) => title.id !== id))
  }

  //edit title

  const [editing, setEditing] = useState(false);
  const [currentTitle, setCurrentTitle] = useState({
    id: null, title:'', company:''
  });

  const editRow = (title) => {
    setEditing(true);
    setCurrentTitle({
      id: title.id, title: title.title, company: title.company

    })


  }

  const updateTitle = (id, updateTitle) => {
      setEditing(false);
      setTitles(titles.map(title => (title.id === id ? updateTitle : title)))

  }

  return (
    <div className="container">
    <h1>VIDEOGAMES CRUD APP</h1>
    <div className="flex-row">
      <div className="flex-large">

    {
        editing ? (
          <div>
            <h2>Edit Videogame</h2>
            <EditTitleForm 
                currentTitle={currentTitle}
                updateTitle={updateTitle}           
            />
          </div>
        ) : (
          <div>
            <h2>Add Videogame</h2>
        <AddTForm addTitle={addTitle} />
          </div>
        )
    }      
        
      </div>
      <div className="flex-large">
        <h2>View Titles</h2>
        <TitleTable
        titles={titles}
        deleteTitle={deleteTitle}
        editRow={editRow}
        />        
      </div>
    </div>
  </div>
  );
}

export default App;


