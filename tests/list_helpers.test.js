const listHelper = require('../utils/list_helpers')
const helper = require('./testHelper')
const blogs = helper.blogs
test('dummy returns 1', () => {
	const result = listHelper.dummy(blogs)
	expect(result).toBe(1)
})

describe('Total Likes', () => {
	test('empty list has 0 likes', () => {
		expect(listHelper.totalLikes([])).toBe(0)
	})
	test('list with 1 element returns the value', () => {
		expect(listHelper.totalLikes([{ title: 'cooking', likes: 10 }])).toBe(10)
	})
	test('large list calculates the correct sum', () => {
		expect(listHelper.totalLikes(blogs)).toBe(36)
	})
})

describe('Most likes', () => {
	test('returns the most liked blog in correct format', () => {
		expect(listHelper.favoriteBlog(blogs)).toEqual({
			title: 'Canonical string reduction',
			author: 'Edsger W. Dijkstra',
			likes: 12,
		})
	})
})

describe('most blogs', () => {
	test('empty list returns an empty object', () => {
		expect(listHelper.mostBlogs([{}])).toEqual({})
	})
	test('correctly returns the author with most blogs', () => {
		expect(listHelper.mostBlogs(blogs)).toEqual({
			author: 'Robert C. Martin',
			blogs: 3,
		})
	})
})

describe('most likes', () => {
	test('empty list returns an empty object', () => {
		expect(listHelper.mostLikes([{}])).toEqual({})
	})
	test('correctly returns the author with most blogs', () => {
		expect(listHelper.mostLikes(blogs)).toEqual({
			author: 'Edsger W. Dijkstra',
			likes: 17,
		})
	})
})
