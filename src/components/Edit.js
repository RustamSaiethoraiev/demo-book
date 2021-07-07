import { Button, FormGroup, Label, Input, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const EditBook = (props) => {
    const { id, title, autor, category } = props.location.state.book
    const initialStateBook = { autor, category, title, id };
    const [newBookData, setNewBookData] = useState(initialStateBook);
    const update = (e) => {
        e.preventDefault();
        if (newBookData.autor === "" || newBookData.title === "" || newBookData.ISBN === "") {
            alert("All the fields are mandatory!");
            return
        }
        props.updateBook(newBookData);
        setNewBookData({ autor: '', category: '', title: '', id: '' });
        props.history.push('/');
    }
    return (
        <div className="container">
            <h2>Edit book</h2>
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
                <Label for="id">ISBN</Label>
                <Input
                    required
                    type="number"
                    id="id"
                    placeholder="id"
                    value={newBookData.id}
                    onChange={(e) => setNewBookData({ ...newBookData, id: e.target.value })} />
            </FormGroup>
            <Button className="m-2" >Update</Button>
            <Link to="/">
                <Button color="primary">Dashboard</Button> </Link>
            <Form onSubmit={update}>
            </Form>
        </div >
    );
}
export default EditBook;
