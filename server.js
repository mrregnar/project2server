const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000

app.use(express.json())

app.set('views', './views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost:27017/foodshareapp', { useNewUrlParser: true, useUnifiedTopology: true  })

const memberSchema = {
    email: String,
    password: String,
    phoneNumber: String,
    communityName: String,
    required: Boolean,
}

// const postedItemSchema = {
//     itemName: String,
//     category: String,
//     expiryDate: Number,
//     contactMethod: String,
//     itemPicture: String, //need to identify how to import pictures and what value type?
//     pendingStatus: Boolean,

// }

const Member = mongoose.model('Member', memberSchema)
// const PostedItem = mongoose.model('PostedItem', postedItemSchema)

app.get('/', (request, response) => {
    response.send('Main Page')
}) 

app.get('/list', (request, response) => {
    Member.find({}, function(err, members) {
        response.render('list', {
            memberList: members
        })
    })
})

const PORT = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running port ${port}...`)
}) 