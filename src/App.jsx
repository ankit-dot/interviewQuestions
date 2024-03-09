import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewPassword from './Questions/viewPassword'
import FolderCode from './Questions/folderStructure/FolderCode'
import explorer from './Questions/folderStructure/folderData'
function App() {
  const [folderData, setFolderData] = useState(explorer);

  return (

    
    <>
      <FolderCode folderData = {folderData}/>
    </>
  )
}

export default App
