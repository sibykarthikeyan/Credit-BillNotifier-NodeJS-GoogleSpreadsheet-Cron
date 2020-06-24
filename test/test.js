const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing to get expense',()=>{
    it("It should get expense",(done)=>{
        chai.request(app)
            .get("/getExpense")
            .set("Accept","application/json")
            .end((err,res)=>{
                console.log(res.text);
                expect(res.status).to.equal(200)
                expect(res.text).to.equal("Heelo to ecpense")
                done();
            });
    });
});