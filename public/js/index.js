"use strict";
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
