const apps = require('../server')
const Job = require('../models/Job')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = chai.use(chaiHttp).request(apps).keepOpen()
chai.should()

describe('JOB', () => {
    beforeEach((done) => {
      Job.deleteMany({}, (err) => {
        done()
      })
    })
  describe('  POST /api/jobs', () => {
    it('should create a new job in the database',(done) =>{
      const id = 1
      const job = new Job({ 

        text: "test",
        title:"title1",
        budget:4000,
        category:"full time",
        link:"www.sddf.com",
        date:"234455",
        skill:"node ",
        emails:"test@gmil.con",
        user: 1,
       });
      app.post('/api/jobs')
      
      .send({
        job,
        user: id
    })
      .end((err, res) => {
        res.should.have.a('object')
        res.should.be.json;
  
        done();
     });
       

    })
})


describe("GET api/jobs",()=>{

    it("should return all jobs",(done)=>{
        app.get('/api/jobs')
        .end((err, res) => {
   
         res.should.have.a('object')
         res.should.be.json;
         done();
      });
      
       
         })

})



})