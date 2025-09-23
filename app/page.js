import Link from 'next/link';

export default function Home() {
	return (
		<header>
			<h1 className='text-xl text-bold'>
				CPRG 306: Web Development 2 - Assignments
			</h1>
			<nav className=''>
				<ul className='nav-list'>
					<li>
						<Link href='http://localhost:3000/week-2' className='text-cyan-400'>
							Week 2 - Assignment Page
						</Link>
					</li>
					<li>
						<Link href='http://localhost:3000/week-3' className='text-cyan-400'>
							Week 3 - Assignment Page
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
