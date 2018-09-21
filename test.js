const chai =  require('chai');
const chaiHttp = require('chai-http');
const app = require('./server');
const func = require('./StringRead');
const fileRead = require('./ReadFile') ;
const expect = chai.expect;
chai.use(chaiHttp);


describe("Product api test",function(){
  var firstValue = 4;
  var secondValue = 8;
  var product;
  
  before(function () {
   product = firstValue * secondValue;
  });
 
  it('should find product of given parameters',function(done) {
    chai.request(app)
        .get(`/product?firstValue=${firstValue}&secondValue=${secondValue}`)
        .end(function(err,res){
         expect(res).to.have.status(200);
         expect(res).to.be.text;
         expect(res.text).to.equal(`Product is:${product}`);
         console.log("Response"+res.status);
         done();
       })
  })

  it('should be a number',function(done) {
    chai.request(app)
          .get('/product?firstValue=a&secondValue=8')
          .end(function(err,res){
           expect(res).to.have.status(404);
           expect(res.text).to.equal('Not Found');
           done();
         })
    })

    it('should give status 404',function(done) {
        chai.request(app)
              .get('/product?firstValue=&secondValue=' )
              .end(function(err,res){
                expect(res).to.have.status(404);
                expect(res.text).to.equal('Not Found');
                done();
             })
        })

})

describe("String api test",function(){
var value ;
var result;
  before(function () {
    value = 'Hello all i am a  hello string' ;
    result = func.readString(value);
   });
 
    it('should find non repeating character',function(done) {
      chai.request(app)
          .get(`/string?string=${value}`)
          .end(function(err,res){
          expect(res.text).to.equal(result);
           expect(res.status).to.equal(200);
           console.log("Response"+res.status);
           done();
         })
    })
  })


  describe("Write File api test",function(){
      it('should create a new file',function(done) {
          chai.request(app)
              .get('/writefile?rawData=new file has been created')
              .end(function(err,res){
               expect(res.status).to.equal(200);
               console.log("Response"+res.status);
               done();
             })
        })
  })
