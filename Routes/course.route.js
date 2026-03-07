import express from "express"
import { getCourses } from "../Controllers/courses.controller.js"
const _route = express.Router()
_route.get("/",getCourses)

export const CourseRouter = _route