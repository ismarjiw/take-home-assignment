export function ImageDetails({ artwork }) {
	if (!artwork) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h3>{artwork.title}</h3>
			<p>{artwork.artist_title || 'Unknown Artist'}</p>
			<img
				alt={artwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
