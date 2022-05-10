const apps = require('../server')
const Meetups = require('../models/Meetups ')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const app = chai.use(chaiHttp).request(apps).keepOpen()
chai.should()


describe('MEET', () => {
    beforeEach((done) => {
      Meetups.deleteMany({}, (err) => {
        done()
      })
    })
    describe('  POST /api/meet', () => {
        it('should create a new job in the database',(done) =>{
          const id = 1
          const meet = new Meetups({ 
            topic:"test",
            technology:"node",
            selfintro:"I work at amazon",
            summary:"test test",
            room:3,
            day:"23/34/556",
            duration:"345",
            user:1

           });
          app.post('/api/meet')
          
          .send({
            meet,
            user: id
        })
          .end((err, res) => {
            res.should.have.a('object')
            res.should.be.json;
      
            done();
         });
           
    
        })
    })
    describe("GET api/meet",()=>{

        it("should return all Meetings",(done)=>{
            app.get('/api/meet')
            .end((err, res) => {
       
             res.should.have.a('object')
             res.should.be.json;
             done();
          });
          
           
             })
    
    })
    



})