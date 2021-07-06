import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const EditBook = (props) => {
    const { id, title, autor, category, ISBN } = props.location.state.book
    const initialStateBook = { ISBN, autor, category, title, id };
    const [newBookData, setNewBookData] = useState(initialStateBook);
    const update = (e) => {
        e.preventDefault();
        if (newBookData.autor === "" || newBookData.title === "" || newBookData.ISBN === "") {
            alert("All the fields are mandatory!");
            return
        }
        props.updateBook(newBookData);
        setNewBookData({ ISBN: '', autor: '', category: '', title: '', id: '' });
        props.history.push('/');
    }
    return (
        <div className="container">
            <Link to="/">
                <Button color="primary">Dashboard</Button> </Link>
            <Form onSubmit={update}>
                <FormGroup>
                    <Label for="title">Book title</Label>
                    <Input
                        required
                        type="text"
                        id="title"
                        placeholder="title"
                        value={newBookData.title}
                        onChange={(e) => setNewBookData({ ...newBookData, title: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="autor">Autor name</Label>
                    <Input
                        required
                        type="text"
                        id="autor"
                        placeholder="autor name"
                        value={newBookData.autor}
                        onChange={(e) => setNewBookData({ ...newBookData, autor: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Category</Label>
                    <Input
                        required
                        type="select"
                        name="select"
                        id="exampleSelect"
                        value={newBookData.category}
                        onChange={(e) => setNewBookData({ ...newBookData, category: e.target.value })} >
                        <option value=""></option>
                        <option value="Detective">Detective</option>
                        <option value="Novel">Novel</option>
                        <option value="Adventures">Adventures</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="ISBN">International Standard Book Number (ISBN)</Label>
                    <Input
                        required
                        type="number"
                        id="ISBN"
                        placeholder="ISBN"
                        value={newBookData.ISBN}
                        onChange={(e) => setNewBookData({ ...newBookData, ISBN: e.target.value })} />
                </FormGroup>
                <Button className="m-2" >Update</Button>
            </Form>
        </div >
    );
}
export default EditBook;
