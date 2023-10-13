import { useState } from 'react';
import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetails } from './ImageDetailsPage';

import './App.css';

export function App() {
	const [results, setResults] = useState([]);
	const [selectedArtwork, setSelectedArtwork] = useState(null);

	// Search for the users's query.
	// TODO: render the results, instead of logging them to the console.
	// NOTE: `searchArtworks` currently returns local data, so that we
	// don't make too many requests to the API! Once we've built out
	// our UI, we need to make real requests!
	// @see: ./src/api.js

	async function onSearchSubmit(query) {
		try {
			const response = await searchArtworks(query);
			setResults(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	}

	const handleArtworkSelect = (artwork) => {
		setSelectedArtwork(artwork);
	};

	const handleBack = () => {
		setSelectedArtwork(null);
	};

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			{selectedArtwork ? (
				<>
					<ImageDetails artwork={selectedArtwork} />
					<button onClick={handleBack}>Back</button>
				</>
			) : (
				<>
					<SearchForm onSearchSubmit={onSearchSubmit} />
					<ul>
						{results.map((result) => (
							<li key={result.image_id}>
								<button onClick={() => handleArtworkSelect(result)}>
									{result.title}
								</button>
								<p>{result.artist_title || 'Unknown Artist'}</p>
							</li>
						))}
					</ul>
				</>
			)}
			<Footer />
		</div>
	);
}
