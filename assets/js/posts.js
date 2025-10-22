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
		content: `Artificial intelligence is moving from hype to helpful. In 2025, we see startups focusing on practical copilots, edge inference, and trustworthy AI. Teams are building solutions that remove repetitive work, automate rote decisions, and improve safety in regulated environments.

Early winners pair small, efficient models with clear product value. They limit scope, measure outcomes, and ship weekly. Many are bringing inference closer to where data lives: on devices and at the network edge. This reduces latency, improves privacy, and lowers cost per prediction.

Investors are rewarding discipline over demos. Founders who publish reliability metrics, design for human oversight, and price for ROI are standing out. The next year will be defined less by parameter counts and more by customer adoption and useful outcomes.`
	},
	{
		id: 'global-markets-recap',
		title: 'Global Markets Close Mixed as Investors Eye Rates',
		category: 'Business',
		date: '2025-10-18',
		author: 'Jane Doe',
		image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Stocks were mixed amid shifting expectations on interest rates and earnings.',
		content: `Major indices ended the session split as investors weighed the path of policy rates and guidance from bellwether companies. Energy struggled on softer commodity prices while consumer names benefited from resilient spending data.

Traders expect central banks to prioritize stable inflation, which could keep borrowing costs elevated longer than hoped. Analysts advise focusing on balance sheets and cash generation over top-line growth alone. Diversification across sectors and durations remains the favored approach for the final quarter.`
	},
	{
		id: 'health-sleep-habits',
		title: 'Sleep Habits That Improve Your Day',
		category: 'Lifestyle',
		date: '2025-10-15',
		author: 'John Lee',
		image: 'https://images.unsplash.com/photo-1516822003754-cca485356ecb?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Simple evening routines can significantly improve sleep quality and productivity.',
		content: `Quality sleep begins long before lights out. Experts recommend winding down at a consistent hour, dimming screens, and keeping the bedroom cool and dark. A brief walk after dinner can also help regulate circadian rhythms.

Small changes compound: avoid caffeine late in the day, write tomorrow’s plan to clear mental clutter, and keep phones off the nightstand. After two weeks, most people report better mood, more stable energy, and improved focus at work.`
	},
	{
		id: 'world-summit-agreement',
		title: 'Leaders Reach Agreement at World Summit',
		category: 'World',
		date: '2025-10-12',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1542940763-8cbb7b00c0f5?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'A framework was agreed upon to collaborate on climate and trade initiatives.',
		content: `Delegations concluded talks with a framework that encourages cleaner industry, technology sharing, and transparent trade rules. The agreement sets milestones for measuring emissions and reducing barriers on climate-friendly goods.

Observers say the plan’s credibility will rest on annual progress reports and joint investments. Businesses welcome the clarity, noting that stable policy reduces risk for long-term projects.`
	},
	{
		id: 'semiconductor-outlook-2026',
		title: 'Semiconductor Outlook Heading into 2026',
		category: 'Technology',
		date: '2025-10-10',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Demand normalizes as factories expand capacity and new nodes ramp.',
		content: `Chipmakers report healthier inventories and steady demand from automotive, data center, and consumer devices. The next cycle favors energy-efficient designs and specialized accelerators. Foundries continue investing in advanced packaging to keep performance gains coming without dramatic cost spikes.`
	},
	{
		id: 'small-business-digital',
		title: 'How Small Businesses Go Digital Without Breaking the Bank',
		category: 'Business',
		date: '2025-10-09',
		author: 'Jane Doe',
		image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'A pragmatic, three-step plan to modernize operations this quarter.',
		content: `Start with the customer journey: list the top five questions people ask and answer them clearly on your site. Next, automate repeatable back-office tasks like invoicing and appointment reminders. Finally, measure one metric per week—response time, conversion rate, or return visits—and improve it by one percent. Sustainable progress beats big-bang projects.`
	},
	{
		id: 'budget-travel-asia',
		title: 'Budget Travel in Southeast Asia: 2025 Guide',
		category: 'Lifestyle',
		date: '2025-10-08',
		author: 'John Lee',
		image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Affordable routes, reliable apps, and safety tips for first-timers.',
		content: `Shoulder seasons offer the best mix of weather and prices. Use regional rail passes, book guesthouses with many recent reviews, and keep digital copies of documents. Respect local customs, carry a simple first-aid kit, and share itineraries with family. Travel light and your trip will be lighter on the wallet too.`
	},
	{
		id: 'education-edtech-remote',
		title: 'Schools Blend In-Person Learning with EdTech',
		category: 'World',
		date: '2025-10-07',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Districts adopt hybrid tools that support teachers, not replace them.',
		content: `Educators report higher engagement when technology augments clear lesson goals. The best results come from short video explainers, interactive quizzes, and small-group discussions. Training and planning time remain the key to durable improvement.`
	},
	{
		id: 'energy-storage-trends',
		title: 'Energy Storage Trends: Cheaper, Smaller, Safer',
		category: 'Technology',
		date: '2025-10-06',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'New chemistries and solid-state approaches expand use cases.',
		content: `Utilities pilot longer-duration batteries to stabilize renewables while device makers chase faster charging with tighter safety margins. Recycling grows into a competitive advantage as supply chains localize.`
	},
	{
		id: 'career-switch-2025',
		title: 'Switching Careers in 2025: A Practical Roadmap',
		category: 'Lifestyle',
		date: '2025-10-05',
		author: 'John Lee',
		image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Learn fast, build proof, and network with generosity.',
		content: `Pick one target role and reverse-engineer three sample job posts. Close skill gaps with focused projects, not endless courses. Publish your work weekly and ask for feedback. Relationships, not resumes, create interviews.`
	},
	{
		id: 'local-markets-cambodia',
		title: 'Local Markets in Cambodia See Weekend Boost',
		category: 'World',
		date: '2025-10-04',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1526894824510-3f2f08d1fda3?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Vendors credit community events and better transport links.',
		content: `Foot traffic improved after organizers coordinated festivals with bus schedules. Small grants helped stalls adopt digital payments, reducing queues and increasing average order sizes.`
	},
	{
		id: 'startup-fundraising-basics',
		title: 'Fundraising Basics for First-Time Founders',
		category: 'Business',
		date: '2025-10-03',
		author: 'Jane Doe',
		image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Clarity, milestones, and realistic use of proceeds win trust.',
		content: `Define the problem in one sentence, show traction with simple charts, and explain why now is the right time. A lean plan that focuses on customer value beats elaborate forecasts.`
	},
	{
		id: 'healthy-meal-prep',
		title: 'Healthy Meal Prep for Busy Weeks',
		category: 'Lifestyle',
		date: '2025-10-02',
		author: 'John Lee',
		image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Save time, cut waste, and eat better with simple batching.',
		content: `Choose two proteins, three vegetables, and one whole grain. Cook on Sunday, season differently each day, and pack in clear containers. A 60-minute routine can cover five lunches.`
	},
	{
		id: 'remote-work-etiquette',
		title: 'Remote Work Etiquette That Builds Trust',
		category: 'Business',
		date: '2025-10-01',
		author: 'Jane Doe',
		image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Write clearly, confirm outcomes, and respect time zones.',
		content: `Asynchronous teams function best with concise updates and predictable handoffs. Record decisions, share context links, and avoid meetings without agendas.`
	},
	{
		id: 'region-weather-patterns',
		title: 'Region Watches Unusual Weather Patterns',
		category: 'World',
		date: '2025-09-30',
		author: 'Staff Writer',
		image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Forecasters suggest preparedness as rainfall varies.',
		content: `Meteorologists advise checking local alerts and updating emergency kits ahead of the storm season. Infrastructure crews plan drainage maintenance to reduce flooding risks.`
	},
	{
		id: 'fitness-at-home',
		title: 'Fitness at Home: Routines That Stick',
		category: 'Lifestyle',
		date: '2025-09-29',
		author: 'John Lee',
		image: 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Short sessions, consistent schedules, real progress.',
		content: `Ten-minute circuits done daily beat a single intense workout. Track reps, protect rest days, and celebrate adherence rather than perfection.`
	},
	{
		id: 'payments-fraud-prevention',
		title: 'Payments Fraud: Practical Prevention Tips',
		category: 'Business',
		date: '2025-09-28',
		author: 'Jane Doe',
		image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1600&auto=format&fit=crop',
		excerpt: 'Layer defenses and monitor anomalies in real time.',
		content: `Enable multi-factor authentication, limit administrative access, and reconcile transactions daily. Clear escalation paths reduce losses when incidents occur.`
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
