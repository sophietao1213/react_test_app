import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'

import uploadImage from '../assets/upload2.png'

import './drop-file-input.css'

const DropFileInput = (props) => {
  const wrapperRef = useRef(null)
  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')
  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')
  const onDrop = () => wrapperRef.current.classList.remove('dragover')


  // Upload a single file
  function uploadFile (e) {
    e.preventDefault()

    const file = e.target.files[0]
    console.log(file.name)

    // if file not exist
    if (!file) {
      console.log('No file Selected')
      return
    }

    // if file exists
    const updatedList = [...fileList, file]
    setFileList(updatedList)
    props.onFileChange(updatedList)


    // const data = new FormData()
    // data.append('file', file)

    // fetch('/upload_file', {
    //   method: 'POST',
    //   body: data
    // }).then(response => response.json())
    //   .then((result) => {
    //     console.log('Success:', result)
    //     // showNotification('File Upload Successful!', 'We have', 'positive')
    //   })
    //   .catch((err) => {
    //     console.error('Error:', err)
    //     // showNotification('File Upload Successful!', 'We have', 'negative')
    //   })
  }

  const fileRemove = (file) => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  return (
    <div>
      <div ref={wrapperRef} className="drop-file-input" onDragEnter={onDragEnter} onDragLeave={onDragLeave} onDrop={onDrop}>
        <div className="drop-file-input_label">
          <img src={uploadImage} />
          <p>Drag & Drop your files here</p>
        </div>
        <input type="file" onChange={ uploadFile } />
      </div>
      {
        fileList.length > 0 ? (
          <div className='drop-file-preview'>
            <p className='drop-file-preview__title'>Ready to upload</p>
            {
              fileList.map((item, index) => (
                <div key={index} className='drop-file-preview__item'>
                  <div className='drop-file-preview__item__info'>
                    <p>{item.name}</p>
                    <p>{item.size}B</p>
                  </div>
                  <span className='drop-file-preview__item__del' onClick={() => fileRemove(item)}>x</span>
                </div>
              ))
            }
          </div>
        ) : null
      }
    </div>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func
}

export default DropFileInput
