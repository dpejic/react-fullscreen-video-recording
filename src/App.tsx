import { useState } from 'react'
import { MediaRecord } from './components/MediaRecord'

import './App.css'

const App = () => {
  const [cameraOpen, setCameraOpen] = useState(false)
  const [blobUrl, setBlobUrl] = useState('')

  const handleCloseCamera = (blobUrl: string) => {
    setBlobUrl(blobUrl)
    setCameraOpen(false)
  }

  const handleOpenCamera = () => {
    setCameraOpen(true)
  }

  return (
    <div className="container">
      <button className="camera-button" type="button" onClick={handleOpenCamera}>
        Open camera
      </button>
      {cameraOpen && <MediaRecord onCloseCamera={handleCloseCamera} />}
      {blobUrl.length > 0 && <video className="video-showcase" controls src={blobUrl}></video>}
    </div>
  )
}

export default App
