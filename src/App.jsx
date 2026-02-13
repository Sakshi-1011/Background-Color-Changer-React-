import { useState} from "react"
import './App.css'

function App() {
  const [bgcolor,setColor] = useState("#ffffff")

  const colors = [
    { name: "Primary", code: "#ffffff" },
    { name: "Red", code: "#ef4444" },
    { name: "Green", code: "#22c55e" },
    { name: "Blue", code: "#7badfd" },
    { name: "Gray", code: "#bdc3c7" },
    { name: "Orange", code: "#f97316" },
    { name: "Yellow", code: "#eab308" },
    { name: "Teal", code: "#14b8a6" },
    { name: "Violet", code: "#8b5cf6" },
    { name: "Pink", code: "#ec4899" },
    { name: "Indigo", code: "#6366f1" },
    { name: "Sky", code: "#0ea5e9" },
    { name: "Lime", code: "#84cc16" },
    { name: "Rose", code: "#f43f5e" }
  ];

  return (
    <div className="wrapper">

      <div className="container" style={{backgroundColor:bgcolor}}>

        <h1 className="title">Background Color Changer</h1>

        <p className="color-code">Selected Color: {bgcolor}</p>

        <div className="btn-group">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setColor(color.code)}
              className={bgcolor === color.code ? "active" : ""}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
