// phle var use kiya tha last file mei ab let use krte h

// Uncaught ReferenceError:
// Cannot access 'firstName' before initialization
console.log(firstName);
let firstName = "Neha";
console.log(firstName);

// var k case mei to undefined hojata tha GEC k creation k time
// let mei uninitialised likha hoga


// pr maanlo agr variable bnaya hi nhi h tb print krne chlte hum to aata:
// Uncaught ReferenceError:
// firstName is not defined


// TDZ: Temporal Dead Zone
// jb pheli line execute hui h code ki tbhi to hmara variable initialize hua, or jb tk vo variable uninitialized raha tb tk vo TDZ mei tha
// or jb tk usko initialize nhi krte vo tb tk error hi deta rhega or baad mei initial hone k baad, print krega