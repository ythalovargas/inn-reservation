import express from "express"
import { apartmentRouter } from "./routes/apartment.routes"
import { reservationRouter } from "./routes/reservation.routes"


const app = express()

app.use(express.json())
app.use(apartmentRouter)
app.use(reservationRouter)

const port = process.env.PORT || 3000

app.listen(port,() => console.log(`Server is running on port ${ port }`))