var supertest = require("supertest");
var app = require('./app');

const expected_res = 'Hello World';

describe('Dummy API Response Test', () => {
    it(`should test reponse is ${expected_res}`, () => {
        expect('Hello World').toBe(expected_res);
    })
});

describe("Test Actual GET Response", () => {
    it(`should test reponse is ${expected_res}`, async() => {
        await supertest(app).get('/hello-world')
            .expect(200)
            .then((res) => {
                expect(res.text).toBe(expected_res)
        });
    })
});