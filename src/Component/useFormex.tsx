import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData{
    title: string;
    discription: string;
  };




export const UseFormExample = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const [list, setList] = useState<any[]>([]);
  const [abc , setAbc] = useState<any>(false);
  const [key , setKey] = useState<number>()
//   console.log(1213132,key);
  const onSubmit = (data: any) => {
    if(key){
        list.splice(key-1,1,data)
    } else{
        setList([...list,data]);
    }   
    setValue('title', '')
    setValue('discription', '')
    setKey(undefined)
}

const Edit = (id:any) =>{
    var result = list;
    var current_obj = result[id-1]
    setValue('title', current_obj.title)
    setValue('discription', current_obj.discription)
    setKey(id)
}
const Delete = (id:any) =>{
    var arry = list;
    list.splice(id-1,1);
    setList(arry)
    setAbc(!abc)

}
  return (
    <>
    <h1>UseForm + TypeScript + crud</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form">
        <div className="form-field">
          <input
            type="text"
            placeholder="title"
            {...register("title", { required: true })}
          />
          {errors?.title?.type === "required" && (
            <p className="error">required*</p>
          )}
        </div>
        <div className="form-field">
          <input
            type="text"
            placeholder="Discription"
            {...register("discription", { required: true })}
          />
          {errors?.discription?.type === "required" && (
            <p className="error">required*</p>
          )}
        </div>
        <div>
          <input type="submit" value="save Item" />
        </div>
      </div>
    </form>
    <hr />
    <div className="table">
        <table>
          <thead>
            <tr>
              <td>Id</td>
              <td>Title</td>
              <td>Description</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {list?.map((item: any, id: any) => {
              return (
                <tr key={id}>
                  <td>{id+1}</td>
                  <td>{item.title}</td>
                  <td>{item.discription}</td>
                  <td>
                    <button onClick={()=>Edit(id+1)}>Edit()</button>
                    <button onClick={()=>Delete(id+1)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
