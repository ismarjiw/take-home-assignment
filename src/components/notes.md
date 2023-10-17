## ✅ Acceptance criteria

- [x] Create a `searchArtworks` function for making GET requests to `/search/artworks/`. See `src/api.js`
  - [x] Request a local copy of data in `searchArtworks` to avoid making too many requests to the AIC's search endpoint while the app is in development
  - [ ] **When the UI is complete**, ensure that `searchArtworks` makes requests to the AIC's `/artworks/search/` endpoint, as described in "Using the `/artworks/search/` endpoint"
- [x] Create a `SearchForm` component that will allow the user to perform a search. See `src/components/SearchForm.jsx`
  - [ ] Fix a known bug: the whole app refreshes when `SearchForm` is submitted
- [ ] In the `App` component, render
  - [x] the `SearchForm` component and
  - [ ] a list of results including _the name of the piece_ and _the artist who created the piece_.
- [ ] Create an `ImageDetailsPage` component.
- [ ] Render `ImageDetailsPage` when the user clicks the title of a piece in the list of results. 💡
- [ ] In the `ImageDetailsPage` component, render
  - [ ] the name of the piece
  - [ ] the artist who created the piece
  - [ ] the image associated with the piece (don't forget its alt text!)
  - [ ] a back button that returns the user to the list of results

## 💡 On rendering `ImageDetailsPage`

- If no artwork is selected, render the the search form with the list of results
- If an artwork is selected, instead render the `ImageDetailsPage` component
- If the back button on `ImageDetailsPage` is clicked, render the search form with the list of results

### Image endpoint:

```
https://www.artic.edu/iiif/2/{IMAGE_ID}/full/843,/0/default.jpg
```

### Artwork endpoint:

```
 https://api.artic.edu/api/v1/artworks/search?q={USER_QUERY}&query[term][is_public_domain]=true&fields=artist_title,date_display,image_id,thumbnail.alt_text,thumbnail.width,thumbnail.height,title
```

### App.jsx

- created results state to store the data that comes back from the Chicago Institute of Art endpoint after a user submits a query
- created selectedArtwork state to keep track of which artwork a user has selected after search -> after the user clicks an artwork link, it triggers the handleArtworkSelect fx which saves the current artwork selected -> this when will conditionally render the ImageDetails component which will display details on the selected artwork

### App.css

- add padding so that each link had enough space inbetween them
- make links black because it matched the mockup -> wasn't sure if i should override regular link behavior / color

### ImageDetailsPage.jsx

- passed selectedArtwork and setSelectedArtwork as props
- created handleBack fx which sets setSelectedArtwork to null in order to conditionally re-render the home page again displaying the previous search results -> triggered when the user clicks the 'back' button
- able to display art details with selectedArtwork prop like in App.jsx

### ImageDetailsPage.css

- made image max width 100% so it fits nicely in the screen -> adjusted for mobile view as well

### SearchForm.jsx

- added if statement to handleFormSubmit so that a search couldn't be done if query == null
