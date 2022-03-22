const newman = require('newman');

newman.run({
    collection: require('./Postman_Assignment.postman_collection.json'), // 
    //environment: require('./collection/customer_api_env.json'), // pointing 
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html',

        }
    }

}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});