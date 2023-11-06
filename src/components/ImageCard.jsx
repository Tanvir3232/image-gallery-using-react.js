import { useState } from "react";
import { useDispatch } from "react-redux";
import { selectImage } from "../redux/imageSelects/action";

const ImageCard = ({ data ,firstElement,totalSelected}) => {
    const [selected,setSelected] = useState(false);
    const { id, imageUrl } = data;
    const [checkbox,setCheckbox] = useState(false);
    const dispatch = useDispatch();
    console.log(totalSelected);
    const handleAddSelectImage = (imageId) =>{
      dispatch(selectImage(imageId))
      setCheckbox(true);
      setSelected(!selected);
    }
    return (
      <div
        onMouseEnter={()=>setCheckbox(true)}
        
        className={`border-2 rounded-xl relative border-gray-400  transition-transform hover:scale-105 hover:bg-gray-700 ${selected && 'border-4 border-green-600'} ${id === firstElement ? "md:col-span-2 md:row-span-2" : ""}`}
      >
       
        <img className="rounded-xl w-full h-full hover:opacity-50" src={imageUrl} alt="" />
        <input onClick={()=>handleAddSelectImage(id)} type="checkbox" className={`absolute top-5 left-5 h-5 w-5 ${checkbox || 'hidden'}`} name="select" />
      </div>
    );
  };
  
  export default ImageCard;
  