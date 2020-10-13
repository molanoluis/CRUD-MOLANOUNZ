import React from 'react'
import { useForm } from 'react-hook-form'

const EditTitleForm = (props) => {

    //console.log(props.currentTitle)
    
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentTitle
    });

    setValue('title', props.currentTitle.title);
    setValue('company', props.currentTitle.company);

    const onSubmit = (data, e) => {
        console.log(data)
        data.id = props.currentTitle.id
        
        props.updateTitle(props.currentTitle.id, data)

        
        //clean fields
        e.target.reset();        
    }

    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" name="title" ref={
        register({
            required: {value: true, message: 'Mandatory Field'}

        })


     } />
     <div>
    {errors?.title?.message}
     </div>
      <label>Company</label>
      <input type="text" name="company" ref={
        register({
            required: {value: true, message: 'Mandatory Field'}

        })


     } />
     <div>
         {errors?.company?.message}
     </div>
      <button>Edit Videogame</button>
    </form>
     );
}
 
export default EditTitleForm;