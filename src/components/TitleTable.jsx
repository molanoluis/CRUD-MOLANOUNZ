import React from 'react'

 


 


const TitleTable = (props) => {
    console.log(props.titles)
    return ( 

       
        
        <table>
            <thead>
            <tr>
                <th>Nº</th>
                <th>Title</th>
                <th>Company</th>
                <th>Actions</th>
                
            </tr>
            </thead>
            <tbody>
                {
                   
                    props.titles.length > 0 ?
                                        
                    props.titles.map((title, index) => (
                <tr key={title.id}>


                     
                    <td key={index}>{index + 1}</td>  
                    
    


                <td>{title.title}</td>
                <td>{title.company}</td>
                <td>
                <button className="button muted-button" onClick={
                    () => {props.editRow(title)}
                    }>Edit</button>
                <button className="button muted-button" onClick={() => {if (window.confirm('Are you sure you wish to delete this item?')) props.deleteTitle(title.id)}}>
                    
                    
                    
                    
                    Delete
                    </button>
                </td>
            </tr>

                 ))   : (
                    <tr>
                    <td colSpan={3}>No Titles</td>
                    </tr>  
                 )
                }
            
            </tbody>
            
        </table>

        

        


     );
}
 


 
export default TitleTable;