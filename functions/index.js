const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.updateData = functions.database.ref(`channel/{id}`).onWrite(event => {
    const msgKey = event.data.key;
    const msgVal = event.data.val();
    console.log(`Key: ${event.data.key}`);
    console.log(`Data: ${JSON.stringify(msgVal)}`);
    const myNewValue = `${msgVal.data} new Update`;
    return event.data.ref.child('newAtt').set(myNewValue);
})

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});