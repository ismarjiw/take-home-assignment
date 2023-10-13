import { useNavigate, useParams } from 'react-router-dom';

export function ImageDetails({ results }) {
	const { imageId } = useParams();
	const navigate = useNavigate();

	const selectedResult = results.find((result) => result.image_id === imageId);

	const handleGoBack = () => {
		navigate('/');
	};

	return (
		<>
			<h3>{selectedResult.title}</h3>
			<p>{selectedResult.artist_title || 'Unknown Artist'}</p>
			<img
				alt={selectedResult.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${selectedResult.image_id}/full/843,/0/default.jpg`}
			/>
			<button onClick={handleGoBack}> Back </button>
		</>
	);
}
