import { useEffect, useState } from "react";
import './App.css';
import FadeLoader from "react-spinners/FadeLoader";
import DropFileInput from "./Component/DropFileInput";
// import FileUpload from "./Component/FileUpload";
// import FileList from "./Component/FileList"
// import Loaderdemo from './Component/Loaderdemo'

function App() {
  // const [files, setFiles] = useState([]);
  // const removeFile = (filename) => {
  //   setFiles(files.filter(file => file.name !== filename))
  // }
  // console.log(files)
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
      <DropFileInput/>

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
  )
}

export default App;