import { CollectionReference, Firestore } from 'firebase-admin/firestore'
import FirebaseDataAccess from './Firebase.model'

export default class EventModel extends FirebaseDataAccess {
    collection: CollectionReference = null as any
    constructor(firestore: Firestore) {
        super()
        this.collection = firestore.collection('events')
    }
}