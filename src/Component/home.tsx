import React, { useEffect, useState } from "react";
import { Model } from "./model";

//create interface for function with argument
interface Iprops {
  a: number;
  b: number;
}

const defaultValue ={
    title: "",
    discription: "",
  }

// function decleare here...
const SumComponent = (props: Iprops) => {
  return <>{props.a + props.b}</>;
};

export const Home: React.FC = () => {
  let message: string = "TypeScript World !";
  const [state, setState] = useState<Model>(defaultValue);
  const [list, setList] = useState<any[]>([]);
  const [abc , setAbc] = useState<any>(false);
  const submitval = () => {
    if(state.id){
      list.splice(state.id-1,1,state)
    }else{
      setList([...list,state]);
    }
    setState({
      title:"",
      discription:""
    })
  };
  const Edit = (id:any) =>{
    var result = list;
    var current_obj = result[id-1]
    setState({
      title:current_obj.title,
      discription:current_obj.discription,
      id:id
    })
  }

  const Delete = (id:any) =>{
   var arry = list;
   list.splice(id-1,1);
   setList(arry)
   setAbc(!abc)
  }

  return (
    <>
      <h1>
        Welcome to : {message} <SumComponent a={10} b={20} />
      </h1>
      <div className="form">
        <div className="form-field">
          <input
            type="text"
            name="title"
            placeholder="title"
            value={state.title}
            onChange={(e) => setState({ ...state, title: e.target.value })}
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            name="discription"
            placeholder="Discription"
            value={state.discription}
            onChange={(e: any) =>
              setState({ ...state, discription: e.target.value })
            }
          />
        </div>
        <div>
          <input type="submit" value="save Item" onClick={() => submitval()} />
        </div>
      </div>
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
