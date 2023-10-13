import { useState } from 'react';

import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';

import './App.css';

export function App() {
	const [results, setResults] = useState([]);

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

	return (
		<div className="App">
			<h1>TCL Career Lab Art Finder</h1>
			<SearchForm onSearchSubmit={onSearchSubmit} />
			<ul>
				{results.map((result) => (
					<li key={result.image_id}>
						<img
							alt={result.thumbnail.alt_text}
							src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
						/>
						<h2>{result.title}</h2>
						<p>{result.date_display}</p>
						<p>{result.artist_title || 'Unknown Artist'}</p>
					</li>
				))}
			</ul>
			<Footer />
		</div>
	);
}
