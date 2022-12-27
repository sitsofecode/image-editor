
import React, { useState } from 'react';    
import PhotoEditor from './components/photoStudio/main';
import Side from './components/side';
import Header from './components/header';
import Gallery from './components/Gallery'; 
import 'react-image-crop/dist/ReactCrop.css';
import { useDispatch } from 'react-redux';
import { deleteUrl } from './features/imageSlice';


function App() {
const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const editClic = () => { setEdit(prevState => !prevState) 
 }

      return (
        <div>
            <div>
          {!edit ? <div>
            <Header />
            <div className='home-body' style={{ display: "flex" }}>
              <Side handleEditClic={editClic} />
              <Gallery handleEditClic={editClic}  />
            </div>
          </div> :
            <PhotoEditor handleEditClic={editClic} />}
        </div>
            </div>
      );
    }
    
    export default App;
  





















  






















