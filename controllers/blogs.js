const blogsRounter = require('express').Router()
const Blog = require('../models/blog')

blogsRounter.get('/', (request, response) => {
	Blog.find({}).then(blogs => {
		response.json(blogs)
	})
})

blogsRounter.post('/', async (request, response) => {
	console.log(request.body)
	const blog = new Blog(request.body)
	const result = await blog.save()
	console.log(result)
	response.status(201).json(result)
})

module.exports = blogsRounter
