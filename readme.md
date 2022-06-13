This project reproduces https://github.com/firebase/firebase-js-sdk/issues/6080

1. npm install
2. cp .firebaserc.template .firebaserc
3. replace `<project id>` .firebaserc and index.ts with your firebase 
4. `npm run test:common`
    * This command is successful
5. `npm run test:esmodule`
    * This command results in an error "FirebaseError: Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"