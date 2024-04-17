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
    logTps() {
        console.log(this.storage.user.tps)
    }
    logTds() {
        console.log(this.storage.user.tds)
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
    getObjProps(obj, props) {
        const objProps = {};
        if (props === null) {
            for (let prop in obj) {
                objProps[prop] = obj[prop];
            }
        } else {
            props.forEach(prop => {
                if (obj.hasOwnProperty(prop)) {
                    objProps[prop] = obj[prop];
                }
            });
        }
        return objProps;
    }
    addToObj(obj, location) {
        location.obj = obj
    }
    addToArr(obj, location) {
        if (Array.isArray(obj)) {
            location.push(...obj)
        } else {
            location.push(obj)
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
    copyToArr(source, target) {
        if (Array.isArray(source)) { //source is arr
            source.forEach(element => {
            target.push(element);
        })} else { //source is obj
            target.push(source)
        }
    }
    editObj(target, source) {
        Object.assign(target, source);
        return target
    }
    

    // action methods
    getEl(obj, location) {
        return this.getObjRef(obj, location)
    }
    addEl(obj, location) {
        if (Array.isArray(location)) { 
            this.addToArr(obj, location)
        } else if (typeof target === 'object') {
            this.addToObj(obj, location)
        }
    }
    removeEl(obj, location) {
        // const index = this.isObjRef(obj) ? this.getObjRefIndex(obj, location) : this.getObjLitIndex(obj, location)
        const index = this.getObjIndex(obj, location) //slower
        index !== -1 ? location.splice(index, 1) : console.log(`obj not found`)   
    }
    editEl(target, source) {
        this.editObj(target, source)
        return target
        //to edit object properties
    }
    copyEl(source, target) {
        if (Array.isArray(target)) { 
            this.copyToArr(source, target)
        } else if (typeof target === 'object') {
            this.copyToObj(source, target)
        }
        //to copy items
    }
    getElProps(source, props) {
        return this.getObjProps(source, props)
    }

    // // user actions
    // addTp(obj) {
    //     let tp = new Tp(obj)
    //     this.addEl(tp, this.storage.user.tps)
    // }
    // addTd(obj) {
    //     let td = new Td(obj)
    //     this.addEl(td, this.storage.user.tds)
    // }
    // removeTp(obj) {
    //     let location = this.storage.user.tps
    //     let index = this.getObjIndex(obj, location)
    //     this.removeEl(index, location)
    // }
    // removeTd(obj) {
    //     let location = this.storage.user.tds
    //     let index = this.getObjIndex(obj, location)
    //     this.removeEl(index, location)
    // }

    // default actions
    loadDefaults() {
        let tp1 = {name: 'Work'}
        let tp2 = {name: 'Gym'}
        let tp3 = {name: 'Personal'}
        const defaultTps = [new Tp(tp1), new Tp(tp2), new Tp(tp3)]

        let td1 = {name: 'Invoice Mark', tp: 'Work', description: 'Email bank invoice to Mark'}
        let td2 = {name: 'Goals', tp: 'Gym', description: 'Bench 200 for 3'}
        let td3 = {name: 'Meditate',  tp: 'Personal', description: 'Meditate daily, 5 minutes each'}
        const defaultTds = [new Td(td1), new Td(td2), new Td(td3)]

        this.addEl(defaultTps, this.storage.default.tps)
        this.addEl(defaultTds, this.storage.default.tds)
    }
    addDefaultsToUser() {
        this.copyEl(this.storage.default.tps, this.storage.user.tps)
        this.copyEl(this.storage.default.tds, this.storage.user.tds)
    }
}

class UserActions {
    constructor(storageManager) {
        this.storageManager = storageManager;
    }

    addTp(obj) {
        let tp = new Tp(obj);
        this.storageManager.addEl(tp, this.storageManager.storage.user.tps);
    }

    addTd(obj) {
        let td = new Td(obj);
        this.storageManager.addEl(td, this.storageManager.storage.user.tds);
    }

    removeTp(obj) {
        this.storageManager.removeEl(obj, this.storageManager.storage.user.tps);
    }

    removeTd(obj) {
        this.storageManager.removeEl(obj, this.storageManager.storage.user.tds);
    }
}

// class add {
//     constructor() {

//     }
//     tp(obj) {
//         let tp = new Tp(obj)
//         this.addEl(tp, this.storage.user.tps)
//     }
//     td(obj) {
//         let td = new Td(obj)
//         this.addEl(td, this.storage.user.tds)
//     }
    
// }

// class remove {
//     constructor() {
//         this
//     }

//     tp(obj) {
//         let location = this.storage.user.tps
//         let index = this.getObjIndex(obj, location)
//         this.removeEl(index, location)
//     }
//     td(obj) {
//         let location = this.storage.user.tds
//         let index = this.getObjIndex(obj, location)
//         this.removeEl(index, location)
//     }
// }

const storageManager = new StorageManager()
const userActions = new UserActions(storageManager)
storageManager.loadDefaults()
storageManager.addDefaultsToUser()

let myTodo = {name : 'Meeting', tp: 'Gym', description: 'workout log'}
userActions.addTd(myTodo)
storageManager.logTds()

