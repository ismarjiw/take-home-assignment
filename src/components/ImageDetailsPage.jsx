import './ImageDetailsPage.css';

export function ImageDetails({ selectedArtwork, setSelectedArtwork }) {
	const handleBack = () => {
		setSelectedArtwork(null);
	};

	return (
		<div className="image-details">
			<div className="image-header">
				<div className="image-titles">
					<h1>{selectedArtwork.title}</h1>
					<h4>
						{' by '}
						{selectedArtwork.artist_title || 'Unknown Artist'}
					</h4>
				</div>
				<div className="image-button">
					<button className="back-button" type="button" onClick={handleBack}>
						Back
					</button>
				</div>
			</div>
			<img
				alt={selectedArtwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${selectedArtwork.image_id}/full/843,/0/default.jpg`}
			/>
		</div>
	);
}
