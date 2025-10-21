function debounce(fn, wait) {
	let t; 
	return (...args) => { 
		clearTimeout(t); 
		t = setTimeout(() => fn(...args), wait); 
	};
}

document.addEventListener('DOMContentLoaded', () => {
	const selectEl = document.getElementById('category');
	const searchEl = document.getElementById('q');
	const resultsEl = document.getElementById('results');

	function render(posts) {
		if (!resultsEl) return;
		if (posts.length === 0) {
			resultsEl.innerHTML = '<p style="color:#9fb0c3;grid-column:1/-1;">No articles found.</p>';
			return;
		}
		resultsEl.innerHTML = posts.map(p => `
			<article class="card">
				<a href="/post.html?id=${p.id}" aria-label="Read: ${p.title}">
					<img src="${p.image}" alt="${p.title}" loading="lazy">
					<div class="card-content">
						<h3 class="card-title">${p.title}</h3>
						<div class="card-meta">${p.category} · ${new Date(p.date).toLocaleDateString()}</div>
						<p class="card-excerpt">${p.excerpt}</p>
					</div>
				</a>
			</article>
		`).join('');
	}

	function applyFilter() {
		const cat = selectEl ? selectEl.value : '';
		const q = searchEl ? searchEl.value.toLowerCase() : '';
		let posts = window.NewsData ? [...window.NewsData.POSTS] : [];
		if (cat) posts = posts.filter(p => p.category === cat);
		if (q) posts = posts.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
		render(posts);
	}

	if (selectEl && window.NewsData) {
		const cats = window.NewsData.getCategories();
		selectEl.innerHTML = '<option value="">All categories</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join('');
	}

	applyFilter();
	if (selectEl) selectEl.addEventListener('change', applyFilter);
	if (searchEl) searchEl.addEventListener('input', debounce(applyFilter, 200));
});

