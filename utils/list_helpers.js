function dummy(blogs) {
	return 1
}
function totalLikes(blogs) {
	let total = 0
	blogs.forEach(blog => {
		total += blog.likes
	})

	return total
}
function favoriteBlog(blogs) {
	let mostLikedBlog = {}
	let mostLikes = 0
	blogs.forEach(blog => {
		if (blog.likes > mostLikes) {
			mostLikes = blog.likes
			mostLikedBlog = blog
		}
	})
	return {
		title: mostLikedBlog.title,
		author: mostLikedBlog.author,
		likes: mostLikedBlog.likes,
	}
}

function mostBlogs(blogs) {
	//debugger
	let authorBlogs = {}
	blogs.forEach(blog => {
		const author = blog.author
		if (author in authorBlogs) {
			authorBlogs[author] += 1
		} else {
			authorBlogs[author] = 1
		}
	})
	//console.log(authorBlogs)
	let author = null
	let mostBlogs = -Infinity

	for (const key in authorBlogs) {
		if (authorBlogs.hasOwnProperty(key)) {
			const value = authorBlogs[key]
			if (value > mostBlogs) {
				author = key
				mostBlogs = value
			}
		}
	}
	if (author !== 'undefined' && mostBlogs > 0) {
		return { author: author, blogs: mostBlogs }
	}
	return {}
}
function mostLikes(blogs) {
	debugger
	let authorBlogs = {}
	blogs.forEach(blog => {
		const author = blog.author
		if (author in authorBlogs) {
			authorBlogs[author] += blog.likes
		} else {
			authorBlogs[author] = blog.likes
		}
	})
	console.log(authorBlogs)
	let author = null
	let mostLikes = -Infinity

	for (const key in authorBlogs) {
		if (authorBlogs.hasOwnProperty(key)) {
			const value = authorBlogs[key]
			if (value > mostLikes) {
				author = key
				mostLikes = value
			}
		}
	}
	if (author !== 'undefined' && mostLikes > 0) {
		return { author: author, likes: mostLikes }
	}
	return {}
}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog,
	mostBlogs,
	mostLikes,
}
