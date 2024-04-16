import Tp from "./script/internal/Tp";
import Td from "./script/internal/Td";
import Topic from "./script/internal/Tp";

class StorageManager {

    constructor() {
        this.storage = {
            user: {
                tps: [],
                tds: [],
            },
            default: {
                tps: [],
                tds: [],
            }
        }
    }

    log() {
        console.log(this.storage)
    }


    // obj methods
    isObjRef(obj) {
        return obj !== null && typeof obj === 'object' && (obj.constructor !== Object || Object.getPrototypeOf(obj) !== Object.prototype);
    }
    isObjLit(obj) {
        return obj !== null && typeof obj === 'object' && obj.constructor === Object && Object.getPrototypeOf(obj) === Object.prototype;
    }
    getObjRef(obj, location) {
        return location.find(item => {
          for (let key in obj) {
            if (item[key] !== obj[key]) {
              return false
          }
        }
        return true
      })
    }
    getObjRefIndex(obj, location) {	
        //   return location.indexOf(getObjRef(obj, location)) faster below
        return location.indexOf(obj)
    }
    getObjLitIndex(obj, location) {	
          return location.indexOf(getObjRef(obj, location))
    }
    getObjIndex(obj, location) {
        const index = this.isObjRef(obj) ? this.getObjRefIndex(obj, location) : this.getObjLitIndex(obj, location)
        return index  
    }
    copyToArr(source, target) {
        if (Array.isArray(source)) { //source is arr
            source.forEach(element => {
            target.push(element);
        })} else { //source is obj
            target.push(source)
        }
    }
    copyToObj(source, target) {
        if (Array.isArray(source)) { //source is arr
            source.forEach(element => {
                for (let key in element) {
                    target[key] = element[key];
                }
        })} else { //source is obj
                for (let key in source) {
                target[key] = source[key];
            }	
        }
    }
    

    // user methods
    add(obj, location) {
        if (Array.isArray(obj)) {
            location.push(...obj)
        } else {
            location.push(obj)
        }
    }
    remove(obj, location) {
        const index = this.isObjRef(obj) ? this.getObjRefIndex(obj, location) : this.getObjLitIndex(obj, location)
        index !== -1 ? location.splice(index, 1) : console.log(`obj not found`)   
    }
    edit(target, source) {
        Object.assign(target, source);
        return target
        //to edit object properties
    }
    copy(source, target) {
        if (Array.isArray(target)) { 
            this.copyToArr(source, target)
        } else if (typeof target === 'object') {
            this.copyToObj(source, target)
        }
        //to copy items
    }

    // user actions
    addTp(obj) {
        let tp = new Tp(obj)
        this.add(tp, this.storage.user.tps)
    }
    addTd(obj) {
        let td = new Td(obj)
        this.add(td, this.storage.user.tds)
    }
    removeTp(obj) {
        let location = this.storage.user.tps
        let index = this.getObjIndex(obj, location)
        this.remove(index, location)
    }
    removeTd(obj) {
        let location = this.storage.user.tds
        let index = this.getObjIndex(obj, location)
        this.remove(index, location)
    }

    // default actions
    createDefaults() {
        let tp1 = {name: 'Work'}
        let tp2 = {name: 'Gym'}
        let tp3 = {name: 'Personal'}
        const defaultTps = [new Tp(tp1), new Tp(tp2), new Tp(tp3)]

        let td1 = {name: 'Invoice Mark', tp: 'Work', description: 'Email bank invoice to Mark'}
        let td2 = {name: 'Goals', tp: 'Gym', description: 'Bench 200 for 3'}
        let td3 = {name: 'Meditate',  tp: 'Personal', description: 'Meditate daily, 5 minutes each'}
        const defaultTds = [new Td(td1), new Td(td2), new Td(td3)]

        this.add(defaultTps, this.storage.default.tps)
        this.add(defaultTds, this.storage.default.tds)
    }
    userAddDefaults() {
        this.copy(this.storage.default.tps, this.storage.user.tps)
        this.copy(this.storage.default.tds, this.storage.user.tds)
    }
    

}

class add {
    constructor() {
        this
    }
    tp() {
        let tp = new Tp(obj)
        this.add(tp, this.storage.user.tps)
    }
    td() {
        let td = new Td(obj)
        this.add(td, this.storage.user.tds)
    }
    
}

class remove {
    constructor() {
        this
    }

    tp() {
        let location = this.storage.user.tps
        let index = this.getObjIndex(obj, location)
        this.remove(index, location)
    }
    td() {
        let location = this.storage.user.tds
        let index = this.getObjIndex(obj, location)
        this.remove(index, location)
    }
}

const storageManager = new StorageManager()
storageManager.createDefaults()
storageManager.userAddDefaults()