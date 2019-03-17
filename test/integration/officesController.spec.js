const repo = require('../mocks/repository');
const officeHelper = require('./officeHelper');
const officesData = require('../../data/offices.json');
const config = require('../../config.json');

describe('controllers/officesController', () => {

    let helper;
    let officesRepo;

    beforeEach(() => {
        officesRepo = repo(officesData);
        helper = officeHelper({ offices: officesRepo}, config);
    });

    it('get all', async () => {
        expect.assertions(1);

        const offices = await helper.getOffices();

        expect(offices).toEqual(JSON.parse(JSON.stringify(officesData)));
    });

    

    // it('read agents', async () => {
    //     expect.assertions(1);

    //     const item = await helper.readAgents(3);

    //     const agents = JSON.parse(JSON.stringify(officesData))
    //     const agentId = agents.findIndex((agent) => agent.officeId === 3);
    //     const agent = agents[agentId - 1];

    //     expect(item).toEqual(agent);
    // });
});

