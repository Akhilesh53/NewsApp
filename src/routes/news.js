const express = require('express')
const newsRouter = express.Router()

const axios = require('axios')


newsRouter.get('',async(req,res) => {
    //res.render('news')
    try {
        const newsAPI = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts')
        res.render('news', {articles : newsAPI.data})
    } catch (error) {
        if(error.response)
        {   res.render('news', {articles : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
        }else if(error.requiest)
        {
            res.render('news', {articles : null})
            console.log(error.requiest)
        }else
        {
            res.render('news', {articles : null})
            console.log('Error',error.message)
        }
    }

})

newsRouter.get('/:id',async(req,res) => {
    let articleID = req.params.id;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}`)
        res.render('newsSingle', {article : newsAPI.data})
    } catch (error) {
        if(error.response)
        {   res.render('newsSingle', {article : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
        }else if(error.requiest)
        {
            res.render('newsSingle', {article : null})
            console.log(error.requiest)
        }else
        {
            res.render('newsSingle', {article : null})
            console.log('Error',error.message)
        }
    }

})

newsRouter.post('',async(req,res) => {
    let search = req.body.search;
    try {
        const newsAPI = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts?search=${search}`)
        res.render('newsSearch', {articles : newsAPI.data})
    } catch (error) {
        if(error.response)
        {   res.render('newsSearch', {articles : null})
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.header)
        }else if(error.requiest)
        {
            res.render('newsSearch', {articles : null})
            console.log(error.requiest)
        }else
        {
            res.render('newsSearch', {articles : null})
            console.log('Error',error.message)
        }
    }

})

module.exports = newsRouter