'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('TEMPTATIONs', [
            {
                name: 'Pommeline',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/pommelien.png',
                gender: 'female',
                iq: 58,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Parastoo',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/paratsoe.png',
                gender: 'female',
                iq: 49,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Saartje',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/saartje.png',
                gender: 'female',
                iq: 73,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Bo',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/bo.png',
                gender: 'female',
                iq: 91,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Ashley',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/ashley.png',
                gender: 'female',
                iq: 38,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Danyla',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/daniela.png',
                gender: 'female',
                iq: 67,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Manouh',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/manon.png',
                gender: 'female',
                iq: 158,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Rowena',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/rowena.png',
                gender: 'female',
                iq: 60,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Levi',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/levi.png',
                gender: 'male',
                iq: 17,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Karim',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/karim.png',
                gender: 'male',
                iq: 70,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Alex',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/alex.png',
                gender: 'male',
                iq: 45,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Dylan',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/dylan.png',
                gender: 'male',
                iq: 67,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Alex',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/alex.png',
                gender: 'male',
                iq: 45,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Ken',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/ken.png',
                gender: 'male',
                iq: 85,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Quinten',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/quinten.png',
                gender: 'male',
                iq: 35,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Kevin',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/kevin.png',
                gender: 'male',
                iq: 99,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
            {
                name: 'Giuseppe',
                imageUrl: 'http://www.vijf.be/sites/default/files/styles/wysiwyg_full/public/article/guisseppe.png',
                gender: 'male',
                iq: 52,
                updatedAt: "2017-02-13T10:14:08.372Z",
                createdAt: "2017-02-13T10:14:08.372Z",
            },
        ], {});
    },

    down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('TEMPTATIONs', null, {});
    }
};
