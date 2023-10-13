import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { searchArtworks } from '../api';
import { SearchForm } from './SearchForm';
import { Footer } from './Footer';
import { ImageDetails } from './ImageDetailsPage';

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
		<Router>
			<div className="App">
				<h1>TCL Career Lab Art Finder</h1>
				<SearchForm onSearchSubmit={onSearchSubmit} />
				<Routes>
					<Route
						element={
							<ul>
								{results.map((result) => (
									<li key={result.image_id}>
										<Link to={`/artwork/${result.image_id}`}>
											{result.title}
										</Link>
										<p>{result.artist_title || 'Unknown Artist'}</p>
									</li>
								))}
							</ul>
						}
						path="/"
					/>
					<Route
						element={<ImageDetails results={results} />}
						path="/artwork/:imageId"
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}
