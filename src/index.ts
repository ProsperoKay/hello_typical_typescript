
// How do you know if someone is a TypeScript developer?
// Just ask them their type!

type Uid = string | number
type UserInfo = { name: string, uid: Uid }


const query = (uid: Uid, item: string) => {
    console.log(`finding user: ${uid} with ${item}... `)
};

const getUser = (user: UserInfo) => {
    console.log(`finding... uid: ${user.uid} name: ${user.name}`)
};

query(1020566223, "shoe")

let dolby_object: UserInfo = {
    name: "dolby",
    uid: 2098078,
}

getUser(dolby_object)
getUser(dolby_object)
getUser(dolby_object)
getUser(dolby_object)
getUser(dolby_object)



// How do you make a TypeScript developer happy?
// Give them a generic gift!





// What do you call a TypeScript developer who doesn’t use interfaces?
// A loose cannon!




// How do you annoy a TypeScript developer?
// You tell them that JavaScript is better!


