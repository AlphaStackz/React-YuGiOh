import { data } from "../public/data.js"

function App() {
    console.log(data)
  return <>
      {data.map((item) => (
          <div key={item.id}>
              <p>{item.id}</p>
              <p>{item.title}</p>
              <p>{item.lore}</p>
              <img src={item.imageUrl} alt={item.title}/>
          </div>
          )
      )}
    </>
}

export default App
