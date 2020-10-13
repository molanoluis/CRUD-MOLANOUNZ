import React from 'react'
import { useForm } from 'react-hook-form'

const AddTForm = (props) => {
    
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        //console.log(data)

        props.addTitle(data)

        
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
      <button>Send info</button>
    </form>
     );
}
 
export default AddTForm;