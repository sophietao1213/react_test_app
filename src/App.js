import { useEffect, useState } from "react";
import './App.css';
import FadeLoader from "react-spinners/FadeLoader";
import DropFileInput from "./Component/DropFileInput";
import axios from 'axios'
// import FileUpload from "./Component/FileUpload";
// import FileList from "./Component/FileList"
// import Loaderdemo from './Component/Loaderdemo'

// File URL
const PNG_FILE_URL = 'http://localhost:3000/file_png.png'
const PDF_FILE_URL = 'http://localhost:3000/file_pdf.pdf'
const ZIP_FILE_URL = 'http://localhost:3000/file_zip.zip'

function App() {
  // const [files, setFiles] = useState([]);
  // const removeFile = (filename) => {
  //   setFiles(files.filter(file => file.name !== filename))
  // }
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

  // download pdf from api
  // const downloadFile=(url) => {

  // }

  const downloadFile =  (url) => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      // use an url in the Public Folder
      const fileName = url.split("/").pop()
      console.log(blobURL)

      const aTag = document.createElement('a')
      // aTag.href = url
      aTag.href = blobURL
      aTag.setAttribute('download', fileName)
      document.body.appendChild(aTag)

      aTag.click()
      // Not sure if need remove here
      aTag.remove()
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


  return (
    // <div className='App'>
    //   {/* <p className='title'>Upload xxxx File</p> */}
    //   {/* <FileUpload files={files} setFiles={setFiles} removeFile = {removeFile} />
    //   <FileList files={files} removeFile={removeFile} /> */}
      
    // </div>

    // <div className="box">
    //   <h2 className="header">
    //     Upload Test Files
    //   </h2>
    //   <DropFileInput/>

    //   {
    //     loading?
    //     <FadeLoader
    //     color={'#D0021B'}
    //     loading={loading}
    //     size={100}
    //     aria-label="Loading Spinner"
    //     data-testid="loader"/>
    //     :
    //     <div>
    //       <button onClick={showResults}>Show Text File</button>
    //       <pre>{result}</pre>
    //     </div>
    //   }
    // </div>

    <div className="App">
      <h1>Download Files from API</h1>
      <button onClick={() => {downloadFile(PNG_FILE_URL);}}>Dowenload PNG File</button>
      <button onClick={() => {downloadFile(PDF_FILE_URL);}}>Dowenload PDF File</button>
      <button onClick={() => {downloadFile(ZIP_FILE_URL);}}>Dowenload ZIP File</button>
      <h1>Download file form Flask</h1>
      <button onClick={() => {download('file_png.png')}}>Dowenload PNG File</button>
      <button onClick={() => {download('logo192.png')}}>Dowenload 192PNG File</button>
      <button onClick={() => {download('file_pdf.pdf');}}>Dowenload PDF File</button>
      <button onClick={() => {download('file_zip.zip');}}>Dowenload ZIP File</button>
    </div>
  )
}

export default App;