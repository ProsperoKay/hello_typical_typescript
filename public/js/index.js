import { messageContent } from "./message.js";
const messagesComponent = document.getElementById("messages_component");
messagesComponent === null || messagesComponent === void 0 ? void 0 : messagesComponent.replaceChildren();
const listMessages = (item) => {
    const content = document.createElement("div");
    content.innerHTML = `
    <div class="max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow">
    <svg class="w-7 h-7 text-gray-500 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" viewBox="0 0 200 200">
        ${item.svgPath}
    </svg>
    <h5 class="mb-2 text-2xl text-left font-semibold tracking-tight text-gray-900 ">
        ${item.title}
    </h5>

    <p class="mb-3 text-left font-normal text-gray-500 ">
        ${item.body}
    </p>
    </div>
`;
    messagesComponent === null || messagesComponent === void 0 ? void 0 : messagesComponent.appendChild(content);
};
messageContent.map((item) => listMessages(item));
