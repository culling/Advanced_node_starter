// import { config } from '../../server/config';
// const port = config.port;

const baseUrl = `http://localhost:5000`;
console.log(`baseUrl: ${baseUrl}`);

describe('My First Test', () => {
    it('Does not do much!', () => {
        expect(true).to.equal(true)
    });
});

describe('My First Test visit home', () => {
    it('Visits home page', () => {
        cy.visit(baseUrl);
    });
});

describe('Project v1 API', () => {
    it('Get from project API', () => {
        cy.request(`${baseUrl}/api/v1/projects`);
    });
});