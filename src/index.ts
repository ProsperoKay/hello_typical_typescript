import { messageContent, Content } from "./messages";

const messagesComponent = document.getElementById("messages_component")

const listMessages = (item: Content) => {
    const content: HTMLElement = new HTMLElement();

    content.innerHTML = `
    <div class="m-auto px-4 py-2 text-center text-gray-500 ring-2 ring-red-300 rounded-2xl">
    <div class="mx-auto mb-4 bg-gray-500 w-36 h-36 rounded-full"></div>
    <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 ">
        ${item.title}
    </h3>
    <p>${item.body}</p>
    </div>`

    messagesComponent?.appendChild(content)
}

const allContent = messageContent()


// How do you know if someone is a TypeScript developer?
// Just ask them their type!

type UserID = string | number
type UserInfo = { name: string, uid: UserID }


const query = (uid: UserID, item: string) => {
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


