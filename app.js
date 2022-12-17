import express from "express";
import cors from "cors";
import http from "http"

//importamos conexion a la DB

import db from "./database/db.js"
import blogRoutes from "./routes/routes.js"

const app = express()

// esto es nuevo
const server = http.createServer(app)
app.set("port", process.env.PORT || 8000)



// lo nuevo termina aqui

app.use(cors())
app.use(express.json())
app.use("/blogs", blogRoutes)

try {
  await db.authenticate()
  console.log("Conexion exitosa a la DB")
} catch (error) {
  console.log(`El error de conexion es: ${error}`)
}


app.get("/", (req, res) => {
  res.send("Hola Mundo")
})

server.listen(app.get("port"),()=>{
  console.log(`server iniciado en ${app.get("port")}`)
})

// app.listen(8000, () => {
//   console.log("Server UP running in http://localhost:8000/")
// })