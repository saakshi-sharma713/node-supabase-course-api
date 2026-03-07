import express from "express"
import { enrollStudent } from "../Controllers/enrollments.controller.js"
const _route = express.Router()
_route.post("/",enrollStudent)

export const    EnrollRouter = _route