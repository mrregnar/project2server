const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/foodshareapp', { useNewUrlParser: true })

const memberSchema = {
    email: Number,
    password: String,
    phoneNumber: String,
    communityName: String,
    required: Boolean,
}

const postedItemSchema = {
    itemName: String,
    category: String,
    expiryDate: Number,
    contactMethod: String,
    itemPicture: String, //need to identify how to import pictures and what value type?
    pendingStatus: Boolean,

}

const Member = mongoose.model('Member', memberSchema)
const PostedItem = mongoose.model('PostedItem', postedItemSchema)



app.get('/list', (request, response) => {
    Member.find({}, function(err, members) {
        response.render('list', {
            memberList: members
        })
    })
})

// async function displayScene(response, sceneTag, headingText) {
//     await Scene.findOne({sceneTag: sceneTag}, function (err, scene) {
//         if (!err) {
//             response.render(sceneTag, {h1Text: headingText, sectionMessage: scene.sceneContent})     
//         } else {
//             return handleError(err)
//         }
//     });
// }

const PORT = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running port ${port}...`)
}) 