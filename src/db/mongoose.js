const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
})