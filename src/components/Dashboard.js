import React from 'react';
import { Button, Table } from 'reactstrap';
import { Link, } from 'react-router-dom';
const Dashboard = (props) => {
    const { books } = props;
    const getID = (e) => {
        let id = e.target.value;
        props.deleteBook(id);
    }
    const renderBooks = books.map((book) => {
        return (
            <tr key={book.id} >
                <td key={book.id}>{book.id}</td>
                <td key={book.title}>{book.title}</td>
                <td key={book.autor}>{book.autor}</td>
                <td key={book.category}>{book.category}</td>
                <td key={book.ISBN}>{book.ISBN}</td>
                <td>
                    <Link to={{ pathname: "/edit", state: { book: book } }}>
                        < Button color="success" size="sm" className="m-2" value={book.id} > Edit</Button ></Link >
                    <Button value={book.id} color="danger" size="sm" onClick={getID}>Delete</Button>
                </td>
            </tr>)
    })
    return (
        <div className="container breakpoints">
            <h1>Demo book list</h1>
            <Table responsive="md">
                <thead>
                    <tr key="headTable">
                        <th>ID</th>
                        <th>Book title</th>
                        <th>Autor name</th>
                        <th>Category</th>
                        <th>ISBN</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBooks}
                </tbody>
            </Table>
            <Link to="/add" >
                <Button color="primary">Add Book</Button>
            </Link>
        </div >
    );
}
export default Dashboard;
