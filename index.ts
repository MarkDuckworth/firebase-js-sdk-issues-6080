
import { initializeTestEnvironment } from '@firebase/rules-unit-testing'
import { collection } from 'firebase/firestore'

(async () => {
    let env = await initializeTestEnvironment({
        projectId: '<project id>',
        firestore: {
            host: 'localhost',
            port: 8080
        },
    })

    let user = env.unauthenticatedContext()
    const db = user.firestore()

    let c = collection(db, "users");
    console.log(c);
})();