
import { useFormik } from "formik";
import React, { Children } from "react";

interface ProfileProps{
    title?:string,
    lang?:string
    status: "single" | "multiple" | "comited" //this is union type
    children?:React.ReactNode
}

interface myFormValue{
    title:string,
    discription:String
}

export const FormicExample = (props:ProfileProps) =>{
    const {title , lang , status , children} = props; 
    const formik = useFormik({
        initialValues: {
            title: '',
            discription:""
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      }); 
    return(
        <>
        <h1>{title} + {lang} + {status}</h1>
        <div className="form">
        <div className="form-field">
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={formik.handleChange}
            value={formik.values.title} 
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="discription"
            placeholder="Discription"
            onChange={formik.handleChange}
            value={formik.values.discription}
          />
        </div>
        <div>
          <input type="submit" value="save Item"/>
        </div>
      </div>
      <hr/>
        </>
    )
}