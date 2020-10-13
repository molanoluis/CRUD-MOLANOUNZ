import React, { useState } from 'react'
import TitleTable from './components/TitleTable';
import AddTForm from './components/AddTForm';
import { v4 as uuidv4 } from 'uuid';
import EditTitleForm from './components/EditTitleForm';
//import Birds from './components/Birds';
import Clouds from './components/Clouds';
//import Waves from './components/Waves';








// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag



















function App() {
  

 const titlesData = [

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
    
   
   

    <div className="container-fluid"> 
    <Clouds />
  
 
    
<div>
<div className="flex-large">

    
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
            
            <h2>Videogames form</h2>
        <AddTForm addTitle={addTitle} />
          </div>
        )
    }      
        
      </div>
      
    </div>
  </div>
  
    </div><div></div><div className="flex-large">
        <h2>Videogames records</h2>
        <TitleTable
        titles={titles}
        deleteTitle={deleteTitle}
        editRow={editRow}
        />        
      </div></div>
    
            
  );
  
}

export default App;


