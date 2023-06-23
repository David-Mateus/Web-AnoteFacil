
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import axios from "axios";

export async function getStaticProps() {
  const mongoose = require("mongoose");
  const Note = require("/model/Note.js");

  await mongoose
    .connect(
      "mongodb+srv://dmls:07081998@cluster0.je5meob.mongodb.net/nextJSCRUD",
      {
        useNewUrlParser: true,
      }
    )
    .then(() => console.log("DB CONNECTED"));

  const notes = await Note.find().sort({ createdAt: "desc" });
  console.log(notes);
  return {
    props: {
      notes: JSON.parse(JSON.stringify(notes)),
    },
  };
}
export default function Home({ notes }) {
  const [visibility, setVisibility] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteId, setNoteId] = useState("");

  const editForm = (title, content, noteId) => {
    setVisibility((visibility) => !visibility);
    setTitle(title);
    setContent(content);
    setNoteId(noteId);
  };
  const updateNote = async (noteId) => {
    const noteObj = {
      title: title,
      content: content,
    };
    console.log(noteObj);
    await axios.put(`/api/updateNote?id=${noteId}`, noteObj).then(() => {
      window.location.reload(false);
    });
  };
  const deleteNote = (noteId) => {
    axios.delete(`/api/deleteNote?id=${noteId}`).then(() => {
      window.location.reload(false);
    });
  };
  return (
    <>
      <main className="max-w-screem-sm m-auto h-screen">
        <Navbar />
        <section className="max-w-full bg-indigo-500 p-4 mt-4 h-max-full rounded-md">
          <ul className="max-w-lg m-auto">
            {notes.map((note, i) => {
              return (
                <li className="p-6 bg-gray-300 mt-5 mb-4 rounded-md " key={i}>
                  <p className="font-medium">{note.title}</p>
                  <h5>{note.content}</h5>
                  <button
                    onClick={(title, content, noteId) =>
                      editForm(note.title, note.content, note._id)
                    }
                    className="mr-4 mt-4 md:mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteNote(note._id)}
                    className="mt-4 md:mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Delete
                  </button>
                  {visibility && (
                    <div>
                      <h2 className="text-center font-semibold">Update Note</h2>
                      <form className="p-4 bg-indigo-500 mt-1 mb-4 rounded-md flex-col">
                        <div>
                          <input
                            className="bg-white rounded-md  p-4 w-full"
                            type="text"
                            id="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                          />
                        </div>
                        <div>
                          <textarea
                            onChange={(event) => setContent(event.target.value)}
                            className="bg-white rounded-md p-4 w-full mt-3"
                            type="text"
                            id="content"
                            value={content}
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          onClick={() => updateNote(noteId)}
                          className="mr-4 mt-4 md:mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                          Update
                        </button>
                        <button
                          onClick={() =>
                            setVisibility((visibility) => !visibility)
                          }
                          className="mt-4 md:mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                          Cancel
                        </button>
                      </form>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}
