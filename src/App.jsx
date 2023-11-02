import { useSelector } from "react-redux"
import ImageCard from "./components/ImageCard";


function App() {
  const allData = useSelector((state) => state);


  return (
    <div className="bg-slate-100 p-5">
      <div className="bg-white rouded-md p-5">
        <h1 className="font-bold   text-3xl text-gray-800">Image Gallery</h1>
        <div className="my-5 grid grid-cols-2 md:grid-cols-5 gap-6">
          {allData.map(data=> (
            <ImageCard
              key={data.id}
              data={data}
              
            />
          ))}
          <button className="border-2 border-dashed rounded-xl font-semibold">Add Images</button>
        </div>
      </div>

    </div>
  )
}

export default App
