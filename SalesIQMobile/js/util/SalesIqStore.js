//  import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Utility } from '.';

export default class SalesIqStore {

    // constructor() {
    //     Utility.log(' constructor aysnc storage valueeee')
    //     this.saveValueInPersistStore = this.saveValueInPersistStore.bind(this);
    //     this.getValueInPersistStore = this.getValueInPersistStore.bind(this);

    // }

    async getAsyncValueInPersistStore(key) {
        var value = await AsyncStorage.getItem(key);
        console.log("getAsyncValueInPersistStore store", key,value)
        return value
    }

    getItemByKey(key) {
        return AsyncStorage.getItem(key);
    }

    async isUserLogined() {
        var value = await AsyncStorage.getItem('access_token');
        Utility.log(value,'valueeee')
        var text = 'AsyncStorage await Value:' + value;

        if (value) {
            return true
        }
        return false
    }

    async multiGetAsyncValueInPersistStore(keys) {


        const values = await AsyncStorage.multiGet(keys);
        var text = 'After Text multiget :' + values;
        return values
    }

    saveValueInPersistStore(key, value) {
        Utility.log('saveValueInPersistStore called',value)
        if (value) {
            AsyncStorage.setItem(key, value)
        }
    }

    getValueInPersistStore(key, callback) {
        AsyncStorage.getItem(key).then((value) => {
            callback(value)
        });
    }
}
 