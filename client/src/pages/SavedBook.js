import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { List, ListItem } from '../components/List';
import ToBook from '../components/ToBook';

function SavedBook() {
	// Setting our component's initial state
	const [books, setBooks] = useState([]);
	const [formObject, setFormObject] = useState({});

	// Load all books and store them with setBooks
	useEffect(() => {
		loadBooks();
	}, []);

	// Loads all books and sets them to books
	function loadBooks() {
		API.getBooks()
			.then((res) => setBooks(res.data))
			.catch((err) => console.log(err));
	}

	// Deletes a book from the database with a given id, then reloads books from the db
	function deleteBook(id) {
		API.deleteBook(id)
			.then((res) => loadBooks())
			.catch((err) => console.log(err));
	}
	return (
		<div>
			<Container fluid>
				<Row>
					<Col size="md-6 sm-12">
						<Jumbotron>
							<h1>Saved for Later</h1>
						</Jumbotron>
						{books.length ? (
							<List>
								{books.map((book) => (
									<ListItem key={book._id}>
										<Link to={'/books/' + book._id}>
											<strong>
												<img src={book.image} alt="search result"></img>
												{book.title} by <span id="authorList">{book.author}</span>
											</strong>
										</Link>
										<ToBook link={book.link} />
										<DeleteBtn onClick={() => deleteBook(book._id)} />
									</ListItem>
								))}
							</List>
						) : (
							<h3>No Results to Display</h3>
						)}
					</Col>
				</Row>
			</Container>
			;
		</div>
	);
}

export default SavedBook;
