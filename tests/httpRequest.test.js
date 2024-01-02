const supertest = require('supertest')
const Blog = require('../models/blog')
const helper = require('./testHelper')
const app = require('../app')
const api = supertest(app)

beforeEach(async () => {
	await Blog.deleteMany({})
	await Blog.insertMany(helper.blogs)
})
describe('http tests', () => {
	test('get /api/blogs', async () => {
		const response = await api.get('/api/blogs')
		//console.log(response.body)
		expect(response.body.length).toBe(helper.blogs.length)
	})
})
