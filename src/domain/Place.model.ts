import Firestore from '../adapters/Firestore.out'
import { IPlace } from '../entities/place'
import type { IFirestoreAdapters } from '../entities/dataAccess'

export default class PlaceModel extends Firestore {
    constructor(data: IFirestoreAdapters) {
        super(data)
    }
    async createItem(uid: string, place: IPlace) {
        return super.createItem(uid, place)
    }
    async getPlaceById(uid: string, id: string): Promise<IPlace> {
        const items = await super.getItemsByQuery([['uid', '==', uid], ['id', '==', id]], {
            count: {
                absolute: 1
            }
        }) as IPlace[]
        return items[0]
    }
    async mergePlaceById(uid: string, id: string, place: IPlace) {
        const count = await super.setItemsByQuery([['uid', '==', uid], ['id', '==', id]], place, {
            merge: true,
            count: {
                absolute: 1
            }
        })
        return count
    }

}