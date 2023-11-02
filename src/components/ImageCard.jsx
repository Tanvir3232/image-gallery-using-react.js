
const ImageCard = ({data}) => {
   const {id, imageUrl} = data;
    return (
        <div className={`border-2 rounded-xl relative border-gray-400 transition-transform transform-gpu hover:scale-105 hover:bg-gray-700  ${id==1?'md:col-span-2 md:row-span-2':''}`}>
         <img className="rounded-xl w-full h-full  hover:opacity-50" src={imageUrl} alt="" />
        </div>
    );
};

export default ImageCard;