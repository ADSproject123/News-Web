function getParam(name) {
	const u = new URL(window.location.href);
	return u.searchParams.get(name);
}

document.addEventListener('DOMContentLoaded', () => {
	const postId = getParam('id');
	const container = document.getElementById('post');
	const titleEl = document.getElementById('post-title');
	const metaEl = document.getElementById('post-meta');
	const imgEl = document.getElementById('post-image');
	const bodyEl = document.getElementById('post-body');

	if (!postId || !window.NewsData) {
		if (container) container.innerHTML = '<p>Post not found.</p>';
		return;
	}

	const post = window.NewsData.getPostById(postId);
	if (!post) {
		if (container) container.innerHTML = '<p>Post not found.</p>';
		return;
	}

	document.title = post.title + ' - Daily Byte News';
	const descMeta = document.querySelector('meta[name="description"]');
	if (descMeta) descMeta.setAttribute('content', post.excerpt);

	if (titleEl) titleEl.textContent = post.title;
	if (metaEl) metaEl.textContent = post.category + ' · ' + new Date(post.date).toLocaleDateString() + ' · ' + post.author;
	if (imgEl) {
		imgEl.src = post.image;
		imgEl.alt = post.title;
	}
	if (bodyEl) bodyEl.textContent = post.content;
});

