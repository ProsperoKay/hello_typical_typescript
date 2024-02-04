"use strict";
// How do you know if someone is a TypeScript developer?
// Just ask them their type!
const query = (uid, item) => {
    console.log(`finding user: ${uid} with ${item}... `);
};
const getUser = (user) => {
    console.log(`finding... uid: ${user.uid} name: ${user.name}`);
};
query(1020566223, "shoe");
let dolby_object = {
    name: "dolby",
    uid: 2098078,
};
getUser(dolby_object);
getUser(dolby_object);
getUser(dolby_object);
getUser(dolby_object);
getUser(dolby_object);
// How do you make a TypeScript developer happy?
// Give them a generic gift!
// What do you call a TypeScript developer who doesn’t use interfaces?
// A loose cannon!
// How do you annoy a TypeScript developer?
// You tell them that JavaScript is better!
