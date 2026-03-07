import express from "express"
import { enrollStudent } from "../Controllers/enrollments.controller.js"
import { checkCredentials } from "../Middleware/Validate.middleware.js"
const _route = express.Router()
_route.post("/",checkCredentials,enrollStudent)

export const    EnrollRouter = _route