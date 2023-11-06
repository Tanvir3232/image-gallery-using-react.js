import { useDispatch, useSelector } from "react-redux"
import ImageCard from "./components/ImageCard";
import {  FaCheck } from 'react-icons/fa';
import { deleteImages } from "./redux/gallery/action";
import { resetImages } from "./redux/imageSelects/action";


function App() {
  
  const allData = useSelector((state) => state.galleryImages);
  const totalSelected = useSelector((state)=>state.selectedImages);
  const dispatch = useDispatch();
  const handleDeleteSelectedImage = selectedImages =>{
    dispatch(deleteImages(selectedImages))
    dispatch(resetImages());
    
  }
  

  return (
    <div className="bg-slate-100 p-5">
      <div className="bg-white rouded-md p-5">
        {
          totalSelected.length == 0 ? <h1 className="font-bold   text-3xl text-gray-800">Image Gallery</h1>
          :<div className="flex justify-between">
             <p className="font-bold text-xl flex items-center gap-2"><span className="bg-blue-500 p-2 rounded-md"><FaCheck className="text-gray-100 w-4 h-4"></FaCheck></span>{totalSelected.length} Files Selected</p>
             <button onClick={()=>handleDeleteSelectedImage(totalSelected)} className="text-red-500 hover:text-red-700 text-xl font-semibold">Delete files</button>
          </div>
        }
        <div className="my-5 grid grid-cols-1 md:grid-cols-5 gap-6">
          {allData.map(data=> (
            <ImageCard
              key={data.id}
              data={data}
              firstElement = {allData[0].id}
              totalSelected = {totalSelected}
            />
          ))}
          <button className="border-2 border-dashed rounded-xl w-full h-60 font-semibold">Add Images</button>
        </div>
      </div>

    </div>
  )
}

export default App
