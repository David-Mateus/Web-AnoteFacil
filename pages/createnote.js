import Navbar from "./components/Navbar";
import React, {useState} from "react";
import axios from "axios";
export default function CreateNote() {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
  
    const handleSubmit = () =>{
      const noteObj = {
        title: title,
        content: content
      }
      
      console.log(noteObj)
      axios.post('api/newNote', noteObj)
      .then(() => {
        alert('Note Added')
      })
    }
    return (
      <>
      <div className="max-w-screen-sm m-auto h-screen  ">
        <Navbar/>
        <section className="max-w-full bg-indigo-500 0 p-4 mt-4  h-96 rounded-md">
            <h2 className="text-center font-medium text-white">
                Create Note
            </h2>
            <div className="max-w-lg m-auto ">
                <form onSubmit={handleSubmit} className="p-4 bg-gray-300 mt-5 mb-4 rounded-md flex-col text-gray-800">
                    <div>
                        <input onChange={(event) => setTitle(event.target.value)} id="title" type="text" placeholder="Note Title" className="bg-gray-100 p-4 w-full rounded-md"/>
                    </div>
                    <div>
                    <textarea onChange={(event) => setContent(event.target.value)} id="content" type="text" placeholder="Content" className="bg-gray-100 p-4 w-full mt-3 rounded-md"></textarea>

                    </div>
                    <button type='submit' className='mt-4 md:mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-8 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400'>Submit</button>
                </form>
            </div>
        </section>
      </div>
      </>
    );
}