import express from "express"
import { createStudent, getStudent,updateStudent,deleteStudent } from "../Controllers/Students.js"


const routes = express.Router()

routes.post("/cs", createStudent);
routes.get("/get", getStudent)
routes.put("/up", updateStudent)
routes.delete("/del/:id", deleteStudent)

export default routes