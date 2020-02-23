import { all, call, put, takeLatest } from 'redux-saga/effects'

import ShopActionTypes from './shopActionTypes'

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/utils'
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error))
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
