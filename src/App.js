import { useEffect, useState, useRef } from "react"
import './App.css'
import FadeLoader from "react-spinners/FadeLoader"
import DropFileInput from "./Components/DropFileInput"
import axios from 'axios'
import Card from "./Components/Card"
// import FileUpload from "./Component/FileUpload";
// import FileList from "./Component/FileList"
// import Loaderdemo from './Component/Loaderdemo'

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)

  },[])

  const [result, setResult] = useState();
  function showResults() {
    fetch('http://localhost:3000/test.txt')
    .then((res) => {
      console.log(res)
      return res.text()
    }).then((data)=>{
      console.log(data)
      setResult(data)
    })
  }


  function download(filename) {
    fetch('/download/' + filename)
    .then((res) => {
      console.log(res)
      res.blob()
    })
    .then((blob)=>{
      const blobURL = window.URL.createObjectURL(new Blob([blob]))

      const aTag = document.createElement('a')
      // aTag.href = url
      aTag.href = blobURL
      aTag.setAttribute('download', filename)
      document.body.appendChild(aTag)

      aTag.click()
      // Not sure if need remove here
      aTag.remove()
    })
  }

  //-----------------------------drop file function here-----------------------
  const onFileChange = (files) => {
    console.log(files)
  }


  return (
    // <div className='App'>
    //   {/* <p className='title'>Upload xxxx File</p> */}
    //   {/* <FileUpload files={files} setFiles={setFiles} removeFile = {removeFile} />
    //   <FileList files={files} removeFile={removeFile} /> */}
      
    // </div>

    <div className="box">
      <h2 className="header">
        Upload Test Files
      </h2>
      <DropFileInput onFileChange={(files) => onFileChange(files)}/>
      <Card 
      title = 'Card Titile'
      imageUrl='https://images.unsplash.com/photo-1692478325474-76625cf02b7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'
      body='Lorumcedwfvef'
      />

      {/* {
        loading?
        <FadeLoader
        color={'#D0021B'}
        loading={loading}
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"/>
        :
        <div>
          <button onClick={showResults}>Show Text File</button>
          <pre>{result}</pre>
        </div>
      } */}
    </div>

    // <div className="App">
    //   <h1>Download file form Flask</h1>
    //   <button onClick={() => {download('file_png.png')}}>Dowenload PNG File</button>
    //   <button onClick={() => {download('logo192.png')}}>Dowenload 192PNG File</button>
    //   <button onClick={() => {download('file_pdf.pdf');}}>Dowenload PDF File</button>
    //   <button onClick={() => {download('file_zip.zip');}}>Dowenload ZIP File</button>
    // </div>
  )
}

export default App;