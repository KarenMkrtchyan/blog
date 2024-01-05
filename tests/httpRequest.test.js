const supertest = require('supertest')
const Blog = require('../models/blog')
const helper = require('./testHelper')
const app = require('../app')
const api = supertest(app)

beforeEach(async () => {
	await Blog.deleteMany({})
	await Blog.insertMany(helper.blogs)
	jest.setTimeout(60000)
})
describe('http tests', () => {
	test('return correct amont of notes in json format', async () => {
		const response = await api
			.get('/api/blogs')
			.expect('Content-Type', /json/)
			.expect(200)
		expect(response.body.length).toEqual(helper.blogs.length)
	})
	test('.id property is defined instead of ._id', async () => {
		let response = await api.get('/api/blogs')
		response = response.body.map(r => r.id)
		for (r of response) {
			expect(r).toBeDefined()
		}
	})
	test('new blog correctly saved to the DB', async () => {
		const newBlog = {
			title: 'How to chess',
			author: 'Mr Chess',
			url: 'https://www.chess.com/',
			likes: 25,
		}
		await api.post('/').send(newBlog).set('Content-Type', 'application/json')
		const updatedBlogs = await api.get('/api/blogs')
		expect(updatedBlogs.body.length).toEqual(helper.blogs.length + 1)
		expect(updatedBlogs.body).toContainEqual(newBlog)
	})
})
