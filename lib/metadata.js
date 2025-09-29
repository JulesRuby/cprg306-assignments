// just creating a function to generate metadata for the assignment pages, to make it a more DRY
export function createPageMetadata(metaData) {
	return {
		title: metaData.title,
		description: metaData.description,
	};
}
