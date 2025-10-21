document.addEventListener('DOMContentLoaded', () => {
	const latestEl = document.getElementById('latest');
	const moreEl = document.getElementById('more-stories');
	const yearEl = document.getElementById('year');

	if (yearEl) yearEl.textContent = new Date().getFullYear();

	function createCard(post) {
		return `
			<article class="card">
				<a href="./post.html?id=${post.id}" aria-label="Read: ${post.title}">
					<img src="${post.image}" alt="${post.title}" loading="lazy">
					<div class="card-content">
						<h3 class="card-title">${post.title}</h3>
						<div class="card-meta">${post.category} · ${new Date(post.date).toLocaleDateString()}</div>
						<p class="card-excerpt">${post.excerpt}</p>
					</div>
				</a>
			</article>`;
	}

	if (latestEl && window.NewsData) {
		const latest = window.NewsData.getLatestPosts(3);
		latestEl.innerHTML = latest.map(createCard).join('');
	}

	if (moreEl && window.NewsData) {
		const rest = window.NewsData.getRemainingPosts(3);
		moreEl.innerHTML = rest.map(createCard).join('');
	}
});

