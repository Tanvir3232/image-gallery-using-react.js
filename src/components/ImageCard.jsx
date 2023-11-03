import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectImage } from "../redux/imageSelects/action";

const ImageCard = ({ data ,firstElement}) => {
    const { id, imageUrl } = data;
    const [checkbox,setCheckbox] = useState(false);
    const dispatch = useDispatch();
    console.log(firstElement)
    const handleAddSelectImage = (imageId) =>{
      dispatch(selectImage(imageId))
      setCheckbox(true);
    }
    return (
      <div
        onMouseEnter={()=>setCheckbox(true)}
        
        className={`border-2 rounded-xl relative border-gray-400 transition-transform hover:scale-105 hover:bg-gray-700 ${id === firstElement ? "md:col-span-2 md:row-span-2" : ""}`}
      >
       
        <img className="rounded-xl w-full h-full hover:opacity-50" src={imageUrl} alt="" />
        <input onClick={()=>handleAddSelectImage(id)} type="checkbox" className={`absolute top-5 left-5 h-5 w-5 ${checkbox || 'hidden'}`} name="select" />
      </div>
    );
  };
  
  export default ImageCard;
  