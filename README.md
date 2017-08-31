# FIT3140 Lab 06 - Serverless

## Tasks

- Create a folder called “myfirstfunc”

```bash
mkdir myfirstfunc && cd myfirstfunc
```

- initialize a new Firebase project

```bash
firebase init
```

- From the list, select Functions (Arrow and space)
- Select your project or create a new one
- Select Yes for “Do you want to install dependencies with npm now?”
- Congrats!! almost done
- open `index.js` in folder functions and insert this code

```javascript
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.updateData = functions.database.ref(`channel/{id}`)
    .onWrite(event=>{
        const msgKey=event.data.key;
        const msgVale=event.data.val();
        console.log('Key:'+event.data.key);
        console.log('Data:'+JSON.stringify(msgVale));
        const mynewValue=msgVale.data+"  new Update";
        return event.data.ref.child("newAtt").set(mynewValue);
});
```

- save and deploy

```bash
firebase use --add
firebase deploy
```

- Let’s add one more function

```javascript
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from FIT3140!");
 console.log('This is HelloWorld Function')
});
```

- Deploy again

```bash
firebase deploy
```

- To check the log (the output of console.log), go to functions–>Logs

- Now, try to add more functions that update your data
