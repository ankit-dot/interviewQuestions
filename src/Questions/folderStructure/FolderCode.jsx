import React, { useState } from "react";

const FolderCode = ({folderData}) => {
  

  const [visible, setVisible] = useState(true)
  if(folderData.isFolder){
  return (
    <div>
      <div onClick = {() => setVisible(!visible)}>📁{folderData.name}</div>

      <div style={{ marginLeft: "20px", display: visible ? "block" : "none" }}>
        {folderData.items.map((data, index) => {
          

          return (
            

            <FolderCode folderData={data}/>
          )
            
          
        })}
      </div>
    </div>
  );
    }
    else{
        return (
            <div>
                📄{folderData.name}
            </div>
        )
    }
};

export default FolderCode;
