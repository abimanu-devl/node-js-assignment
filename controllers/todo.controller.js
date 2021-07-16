const ToDoList = require('../models/todo');
const hexaToName = require('hex-to-color-name');

const createNewItem = async (req, res) => {
    if (req.body) {
        const todolist = new ToDoList(req.body);
        await todolist.save()
            .then(data => {
                res.status(201).json({
                    message: 'Item created successfully',
                    data
                });
            })
            .catch(error => {
                res.status(400).send({ error: error.message });
            })
    }
}

const getAllItem = async (req, res) => {
    await ToDoList.find({})
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send({ error: error.message })
        })
}

const updateItem = async (req, res) => {
    if (req.body) {
        await ToDoList.findOneAndUpdate(req.params.id, req.body)
            .then(() => {
                res.send({
                    message: 'Item updated successfully',
                });
            })
            .catch(error => {
                res.status(400).send({ error: error.message });
            })
    }
}

const deleteItem = async (req, res) => {
    if (req.params && req.params.id) {
        const id = req.params.id;
        console.log(id);
        await ToDoList.findByIdAndDelete(req.params.id)
            .then(() => {
                res.send({
                    message: 'Item deleted successfully'
                })
            })
            .catch((error) => {
                res.status(400).send({ error: error.message })
            })
    }

}

const searchByKeyword = async (req, res) => {
    const keyword = req.query.searchKeyword;
    const condition = keyword ? { title: { $regex: new RegExp(keyword), $options: "i" } } : {};
    await ToDoList.find(condition)
        .then((result) => {
            res.status(200).send({ result });
        }).catch(error => {
            res.status(404).send({ error: error.message })
        })
}

const filterByProprity = async (req, res) => {
    const keyword = req.query.filterByPriority;
    const condition = keyword ? { priority: { $regex: new RegExp(keyword), $options: "i" } } : {};

    await ToDoList.find(condition)
        .then((result) => {
            res.status(200).send({
                result
            })
        })
        .catch((error) => {
            res.status(404).send({ error: error.message })
        })
}


const filterByColor = async (req, res) => {
    const colors = "#ff0000";
    const realColor = hexaToName(colors);
    console.log(realColor);

    const color = req.query.filterByColor;
    const condition = color ? { color: { $regex: new RegExp(color), $options: "i" } } : {};

    await ToDoList.find(condition)
        .then((result) => {
            res.send({
                result
            })
        })
        .catch((error) => {
            res.status(404).send({ error: error.message })
        })
}

// const afterItemCreatedDate = async (req, res) => {

// }

// const beforeItemCreatedDate = async (req, res) => {

// }

module.exports = {
    createNewItem,
    updateItem,
    deleteItem,
    getAllItem,
    searchByKeyword,
    filterByProprity,
    filterByColor

}