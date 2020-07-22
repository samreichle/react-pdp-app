import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/analytics' 

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: "1:605433718798:web:b70054111ab2059bea745f",
    measurementId: "G-18Q77569E4"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const database = firebase.database();

export { firebase, database as default };











// // child_removed
// database.ref('goals').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('goals').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('goals').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


// database.ref('goals').on('value', snapshot)
//   .once('value')
//   .then((snapshot) => {
//         const goals = [];

//         snapshot.forEach((childSnapshot) => {
//                 goals.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 });
//             });

//             console.log(goals);
//   });
  
// database.ref('goals').on('value', snapshot => {

// const goals = [];

// snapshot.forEach((childSnapshot) => {
//         goals.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(goals);
// });

// database.ref('goals').push({
//     goalName: 'Get a job',
//     strategies: 'Finish twenty applications a day',
//     createdAt: 0,
//     deadline: 0,
//     completionStatus: false
// });


// database.ref('notes/-MCr4AK2L-tsMrYAGzZV').remove();



// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React native, angular, python'
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//         console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// });

// setTimeout(() => {
//     database.ref('job/company').set('Google')
// }, 2500);


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(29)
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     });

// database.ref().set({
//     name: 'Sam Reichle',
//     age: 21,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Tuscaloosa',
//         country: 'United States'
//     }
//     }).then(() => {
//         console.log('data is saved');
//     }).catch((e) => {
//         console.log('This failed', e);
//     });

    
// database.ref('isSingle').remove().then(() => {
//     console.log('Data was removed.');
// }).catch((e) => {
//     console.log('Data removal failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })