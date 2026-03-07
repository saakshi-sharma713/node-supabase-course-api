import express from "express"
import { getCourses } from "../Controllers/courses.controller.js"
import { getStudents } from "../Controllers/enrollments.controller.js"
const _route = express.Router()
_route.get("/",getCourses)
_route.get("/:id/enrollments",getStudents)
export const CourseRouter = _route