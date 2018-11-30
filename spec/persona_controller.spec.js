describe('get: ', function () {
    const PersonaController = require('../controllers/persona.controller');
    const Persona = require('../models/persona.model');
    
    var responseMock, requestMock;

    beforeEach(function () {
        
        requestMock = {
            user: {},
            body: {},
            query: {}
        };

        responseMock = {
            status: function () {
                return responseMock;
            },
            send: function () {},
            json: function () {}
        };

        userPromise = {
            exec: function () {},
            limit: function () {},
            skip: function () {},
            sort: function () {}
        }
    });

    it('successfully gets the PersonaController', function () {
        var findMock = [{ _id: '1234', name: 'Pablo', description: 'An PersonaController' }];
        spyOn(userPromise, 'exec').and.callFake(function (callBack) {
            callBack(undefined, findMock);
        });
        spyOn(Persona, 'find').and.returnValue(userPromise);

        spyOn(responseMock, 'send');
        PersonaController.getRequest(requestMock, responseMock);
        expect(Persona.find).toHaveBeenCalled();

        var firstPersonaController = responseMock.send.calls.mostRecent().args[0].response;
        expect(firstPersonaController.objectId).toEqual(userPromise._id);
        expect(firstPersonaController.name).toEqual(userPromise.name);
        expect(firstPersonaController.description).toEqual(userPromise.description);
    });
});

