const apps = require('../server')
const User = require('../models/User')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = chai.use(chaiHttp).request(apps).keepOpen()
chai.should()

describe('AUTH', () => {
  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      done()
    })
  })

  describe("POST api/auth",()=>{
    
    it('it should  authenticate user',async() => {

      let user = await User.findOne({ email:"felexonyango19@gmail.com" });
  
     const res =await app.post('/api/auth').send({
      email: 'felexonyango19@gmail.com',
      password: 'Felex2018',
     })
     if (!user) {
      res.should.have.status(400);
  
     }
     console.log(res.body);
     
  
         
        })


  })

describe('GET /api/auth/:id',()=>{
  
  it('should return user by id in database',async()=> {

    const id = 2
   const res = await app.get(`/api/auth/${id}`)

 
  res.should.have.a('object')

    
  })

})

  
  })

