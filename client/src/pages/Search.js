import React, { useState } from 'react';
import Jumbotron from '../components/Jumbotron';
import SaveBtn from '../components/SaveBtn';
import GoogleAPI from '../utils/GoogleBooksAPI';
import API from '../utils/API';
import ToBook from '';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, FormBtn } from '../components/Form';

function SearchBook() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Handles updating component state when the user types into the input field
	function handleInputChange(event) {
		const { name, value } = event.target;
		setFormObject({ ...formObject, [name]: value });
	}

	// When the form is submitted, use the API.saveBook method to save the book data
	// Then reload books from the database
	function handleFormSubmit(event) {
		event.preventDefault();
		GoogleAPI.searchGoogle(formObject.searchTerm)
			.then((res) => {
				setBooks(res.data.items);
				console.log(res.data.items);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}

	function saveBook(title, description, author, image, link) {
		let checkedAuthor;
		if (author == null) {
			checkedAuthor = 'Not Listed';
		} else {
			checkedAuthor = author[0];
		}

		API.saveBook({
			title: title,
			author: checkedAuthor,
			synopsis: description,
			image: image,
			link: link,
		})
			.then(alert('Saved Successfully!'))
			.catch((err) => console.log(err));
	}

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<Jumbotron>
							<h1>What Book Sounds Interesting?</h1>
						</Jumbotron>
						<form>
							<Input onChange={handleInputChange} name="searchTerm" placeholder="Keyword(s)" />
							<FormBtn disabled={!formObject.searchTerm} onClick={handleFormSubmit}>
								Search
							</FormBtn>
						</form>
					</Col>
					<Col size="md-8 sm-12">
						<Jumbotron>
							<h1>Results</h1>
						</Jumbotron>
						{books.length ? (
							<List>
								{books.map((book) => (
									<ListItem>
										<strong>
											<img src={book.volumeInfo.imageLinks.thumbnail} alt="search result"></img>
											{book.volumeInfo.title} by{' '}
											<span id="authorList">{book.volumeInfo.authors}</span>
										</strong>
										<SaveBtn
											onClick={() =>
												saveBook(
													book.volumeInfo.title,
													book.volumeInfo.description,
													book.volumeInfo.authors,
													book.volumeInfo.imageLinks.thumbnail,
													book.volumeInfo.previewLink
												)
											}
										/>
										<ToBook link={book.volumeInfo.previewLink} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default SearchBook;
