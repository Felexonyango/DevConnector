const apps = require('../server')
const Post = require('../models/Post')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = chai.use(chaiHttp).request(apps).keepOpen()
chai.should()

describe('POSTS', () => {
  beforeEach((done) => {
    Post.deleteMany({}, (err) => {
      done()
    })
  })
describe('  POST api/posts', () => {
  it('user should create a new post in the database',(done) =>{
    const id = 1
    const post = new Post({ text: 'hello' });
    app.post('/api/posts')
    
    .send({
      post,
      user: id
      
    })
  
    .end((err, res) => {
      res.should.have.a('object')
      res.should.be.json;

      done();
   });
     
  })

})
 describe("GET api/posts",()=>{


  it("should return all posts",(done)=>{
     app.get('/api/posts')
     .end((err, res) => {

      res.should.have.a('object')
      res.should.be.json;
      done();
   });
   
    
      })
 })

describe("GET api/post/:id",()=>{

  it("should return  post by id",async()=>{
    const id=1
    const res = await app.get(`/api/posts/${id}`)
    res.should.have.a('object')
    res.should.be.json;
  
    })

}) 

describe('DELETE api/posts/:id',()=>{
  it("should delete post by id",async()=>{
    const id=1
    const res = await app.delete(`/api/posts/${id}`)

    if(!id){
        res.should.have.status(404)
        res.should.be.json;
    }
    
    })

})


describe('UPDATE api/posts/:id',()=>{
  it("should update post liked by user  id",async()=>{
    const id=1
    const user=1
    const res = await app.put(`/api/posts/like/${id}`)
    .send({user:user})
    
    res.should.have.a('object')
    res.should.be.json;
    
        })
    
})
 
  
})