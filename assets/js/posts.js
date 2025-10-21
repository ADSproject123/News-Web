// Minimal in-memory posts dataset; replace with CMS later if needed
const POSTS = [
	{
		id: 'ai-startups-2025',
		title: 'AI Startups to Watch in 2025',
		category: 'Technology',
		date: '2025-10-20',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'From productivity copilots to edge models, these startups are reshaping the landscape.',
		content: 'Artificial intelligence is moving from hype to helpful. In 2025, we see startups focusing on practical copilots, edge inference, and trustworthy AI. We profile a handful of teams building real products with real traction.'
	},
	{
		id: 'global-markets-recap',
		title: 'Global Markets Close Mixed as Investors Eye Rates',
		category: 'Business',
		date: '2025-10-18',
		author: 'Jane Doe',
		image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Stocks were mixed amid shifting expectations on interest rates and earnings.',
		content: 'Markets ended the day mixed as traders weighed signals from central banks. Analysts expect a cautious stance heading into the next quarter.'
	},
	{
		id: 'health-sleep-habits',
		title: 'Sleep Habits That Improve Your Day',
		category: 'Lifestyle',
		date: '2025-10-15',
		author: 'John Lee',
		image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Simple evening routines can significantly improve sleep quality and productivity.',
		content: 'Experts recommend consistent schedules, reduced blue light exposure, and a cooler bedroom environment for better rest.'
	},
	{
		id: 'world-summit-agreement',
		title: 'Leaders Reach Agreement at World Summit',
		category: 'World',
		date: '2025-10-12',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1542940763-8cbb7b00c0f5?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'A framework was agreed upon to collaborate on climate and trade initiatives.',
		content: 'The agreement outlines cooperation on technology sharing, emissions reduction, and fair trade practices.'
	}
];

function getLatestPosts(limit = 3) {
	return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
}

function getRemainingPosts(offset = 3) {
	return [...POSTS].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(offset);
}

function getPostById(id) {
	return POSTS.find(p => p.id === id);
}

function getCategories() {
	return Array.from(new Set(POSTS.map(p => p.category)));
}

window.NewsData = { POSTS, getLatestPosts, getRemainingPosts, getPostById, getCategories };
