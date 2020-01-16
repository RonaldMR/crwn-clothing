import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyD64Ngeek9l5toFvEQUn4vNak_br2IBo3I',
  authDomain: 'crwn-db-1f68b.firebaseapp.com',
  databaseURL: 'https://crwn-db-1f68b.firebaseio.com',
  projectId: 'crwn-db-1f68b',
  storageBucket: 'crwn-db-1f68b.appspot.com',
  messagingSenderId: '501398564619',
  appId: '1:501398564619:web:d8bf50957a3df2367abc0e',
  measurementId: 'G-62BRF7D3YD'
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
