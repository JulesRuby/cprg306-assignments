import NewItem from './new-item';
import { createPageMetadata } from '../../lib/metadata.js';

// using next's generateMetadata function to create dynamic metadata for the page
export async function generateMetadata() {
	return createPageMetadata({
		title: 'Interactive Counter',
		description:
			'Playing around with state to make an interactive stateful presentational component.',
	});
}

function Page() {
	return (
		<main className='flex flex-col h-screen items-center justify-items-center justify-content-center p-4 max-w-2/3 mx-auto'>
			<header className=' h-24 flex column text-2xl text-center font-bold mb-3'>
				<h1 className='text-xl m-auto'>{`<NewItem>`} component (Part 1)</h1>
			</header>

			<NewItem />
		</main>
	);
}

export default Page;
