const apps = require('../server')
const User = require('../models/User')
const chai = require('chai')
const chaiHttp = require('chai-http')
const app = chai.use(chaiHttp).request(apps).keepOpen()
chai.should()

describe('USERS', () => {
  beforeEach((done) => {
    User.deleteMany({}, (err) => {
      done()
    })
  })
  describe('POST api/users', () => {
    it('it should  register user', async() => {
 
      const newUser = await  User({ 
        name: 'Felex onyango',
        email: 'felex@gmail.com',
        password: '@Felex2020',
        terms:true
      
      });
      const res =await app.post('/api/users')
      .send(newUser)
  
        res.should.have.a('object')
  
          
        })

  })
 
  describe('POST api/users/forgotpassword', () => {
    it("should  forgotPassword user's password",async()=>{

   let user = await User.findOne({email:"felex@gmail.com"})

    const res = await app.post('/api/users/forgetpassword')
   if(!user){
  res.should.have.status(400);
}
})
  
})

})
