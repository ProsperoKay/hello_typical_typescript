interface Content {
    title: string,
    body: string,
    svgPath?: string,
}

const messageContent: Content[] = [
    {
        title: "The Transpilation Tribulation",
        body: "TypeScript is like that over-prepared student who writes, rewrites, and then transcribes their essay before submitting it. Python, on the other hand, is the cool kid who just wings it and still gets an A.",
        svgPath: `<path d="M 50 0 L 100 50 L 50 100 L 0 50 Z M 25 25 L 75 25 L 75 75 L 25 75 Z M 50 25 L 100 75 L 50 75 L 0 25 Z" fill="#00f" stroke="#fff" stroke-width="5"/>        `
    },
    {
        title: "Syntax Showdown",
        body: "TypeScript’s syntax is like a high-maintenance date, with all its rules and symbols. Python’s syntax is like a chill friend who’s always easy to hang out with.",
        svgPath: `<path d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 25 25 L 75 25 L 75 75 L 25 75 Z M 50 0 L 50 100 M 0 50 L 100 50" fill="#f00" stroke="#fff" stroke-width="5"/>
        `
    },
    {
        title: "Type Tyranny vs Dynamic Democracy",
        body: "TypeScript is the strict teacher who wants every ‘i’ dotted and ‘t’ crossed. Python is the laid-back substitute who lets you explore and learn at your own pace.",
        svgPath: `<path d="M 0 0 L 100 0 L 100 100 L 0 100 Z M 25 25 L 75 25 L 75 75 L 25 75 Z M 25 25 Q 50 0 75 25 M 25 75 Q 50 100 75 75" fill="#0f0" stroke="#fff" stroke-width="5"/>
        `
    },
    {
        title: "Generic Jamboree vs Polymorphic Party",
        body: "TypeScript’s generics are like a Swiss army knife, versatile but complicated. Python’s polymorphism is like a spork, simple and effective.",
        svgPath: ` <defs>
        <style>
          .party {
            fill: none;
            stroke: #ff00ff;
            stroke-width: 2;
            stroke-linejoin: round;
            stroke-linecap: round;
          }
          .jamboree {
            fill: none;
            stroke: #00ffff;
            stroke-width: 2;
            stroke-linejoin: round;
            stroke-linecap: round;
          }
        </style>
      </defs>
      <g class="party">
        <path d="M10 10 Q 30 20, 50 10 Q 70 0, 90 10 Q 80 30, 90 50 Q 100 70, 90 90 Q 70 80, 50 90 Q 30 100, 10 90 Q 20 70, 10 50 Q 0 30, 10 10 Z"/>
        <path d="M15 15 Q 35 25, 55 15 Q 75 5, 95 15 Q 85 35, 95 55 Q 105 75, 95 95 Q 75 85, 55 95 Q 35 105, 15 95 Q 25 75, 15 55 Q 5 35, 15 15 Z"/>
      </g>
      <g class="jamboree">
        <path d="M50 10 Q 30 20, 10 10 Q 20 30, 10 50 Q 0 70, 10 90 Q 30 80, 50 90 Q 70 100, 90 90 Q 80 70, 90 50 Q 100 30, 90 10 Q 70 0, 50 10 Z"/>
        <path d="M50 15 Q 35 25, 15 15 Q 25 35, 15 55 Q 5 75, 15 95 Q 35 85, 55 95 Q 75 105, 95 95 Q 85 75, 95 55 Q 105 35, 95 15 Q 75 5, 55 15 Q 50 15 Z"/>
      </g>`
    },
    {
        title: "Interface Intrigue vs Assertion Adventure",
        body: "TypeScript’s interfaces are like a formal contract, rigid but reliable. Python’s type assertions are like a gentleman’s agreement, flexible and friendly.",
        svgPath: ` <defs>
        <style>
          .intrigue {
            fill: none;
            stroke: #ff0000;
            stroke-width: 2;
            stroke-linejoin: round;
            stroke-linecap: round;
          }
          .adventure {
            fill: none;
            stroke: #0000ff;
            stroke-width: 2;
            stroke-linejoin: round;
            stroke-linecap: round;
          }
        </style>
      </defs>
      <g class="intrigue">
        <path d="M10 10 Q 50 50, 90 10 Q 50 90, 10 10 Z"/>
        <path d="M10 90 Q 50 50, 90 90 Q 50 10, 10 90 Z"/>
      </g>
      <g class="adventure">
        <path d="M10 10 L 90 90 M 10 90 L 90 10"/>
        <path d="M50 10 L 50 90 M 10 50 L 90 50"/>
      </g>`
    },
    {
        title: "Enum Enigma vs Dictionary Dilemma",
        body: "TypeScript’s enums are like a set menu at a restaurant, limited but clear. Python’s dictionaries and sets are like a buffet, diverse and delightful.",
        svgPath: `<path d="M 50 10 Q 25 25 25 50 Q 25 75 50 90 Q 75 75 75 50 Q 75 25 50 10 Z" fill="#ff0000" />
        <path d="M 50 10 Q 75 25 75 50 Q 75 75 50 90 Q 25 75 25 50 Q 25 25 50 10 Z" fill="#0000ff" />
        <path d="M 50 10 Q 75 25 75 50 Q 75 75 50 90 Q 25 75 25 50 Q 25 25 50 10 Z" fill="none" stroke="#ffffff" stroke-width="5" />
        <text x="35" y="55" font-family="Arial" font-size="20" fill="#ffffff">E</text>
        <text x="55" y="55" font-family="Arial" font-size="20" fill="#ffffff">D</text>`
    },
    {
        title: "Decorator Duel",
        body: "TypeScript’s decorators are like a secret sauce, obscure but impactful. Python’s decorators are like an open recipe, transparent and transformative.",
        svgPath: `<path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="#ffff00" />
        <path d="M 10 10 L 50 50 L 90 10 L 90 90 L 50 50 L 10 90 Z" fill="none" stroke="#000000" stroke-width="5" />
        <text x="25" y="35" font-family="Arial" font-size="20" fill="#000000">@</text>
        <text x="65" y="35" font-family="Arial" font-size="20" fill="#000000">@</text>
        <text x="25" y="75" font-family="Arial" font-size="20" fill="#000000">@</text>
        <text x="65" y="75" font-family="Arial" font-size="20" fill="#000000">@</text>
        `
    },
    {
        title: "Namespace Nuisance vs Module Magic",
        body: "TypeScript’s namespaces are like a meticulously organized library, verbose but manageable. Python’s modules are like a cozy book club, compact and collaborative.",
        svgPath: `<path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="#00ff00" />
        <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="#000000" stroke-width="5" />
        <path d="M 10 10 L 90 90" fill="none" stroke="#000000" stroke-width="5" />
        <path d="M 90 10 L 10 90" fill="none" stroke="#000000" stroke-width="5" />
        <text x="25" y="35" font-family="Arial" font-size="20" fill="#000000">N</text>
        <text x="65" y="35" font-family="Arial" font-size="20" fill="#000000">M</text>
        <text x="25" y="75" font-family="Arial" font-size="20" fill="#000000">M</text>
        <text x="65" y="75" font-family="Arial" font-size="20" fill="#000000">N</text>
        `
    },
    {
        title: "Ecosystem Extravaganza",
        body: "TypeScript’s ecosystem is like a bustling city, diverse but chaotic. Python’s ecosystem is like a well-planned community, unified and harmonious.",
        svgPath: `<path fill="none" stroke="#000" d="M 10 10 Q 20 20 30 10 Q 40 0 50 10 Q 60 20 70 10 Q 80 0 90 10 Q 100 20 110 10 Q 120 0 130 10 Q 140 20 150 10 Q 160 0 170 10 Q 180 20 190 10 Q 200 0 210 10 Q 220 20 230 10 Q 240 0 250 10 Q 260 20 270 10 Q 280 0 290 10 Q 300 20 310 10 Q 320 0 330 10 Q 340 20 350 10 Q 360 0 370 10 Q 380 20 390 10 Q 400 0 410 10 Q 420 20 430 10 Q 440 0 450 10 Q 460 20 470 10 Q 480 0 490 10"/>
        <path fill="none" stroke="#000" d="M 10 90 Q 20 80 30 90 Q 40 100 50 90 Q 60 80 70 90 Q 80 100 90 90 Q 100 80 110 90 Q 120 100 130 90 Q 140 80 150 90 Q 160 100 170 90 Q 180 80 190 90 Q 200 100 210 90 Q 220 80 230 90 Q 240 100 250 90 Q 260 80 270 90 Q 280 100 290 90 Q 300 80 310 90 Q 320 100 330 90 Q 340 80 350 90 Q 360 100 370 90 Q 380 80 390 90 Q 400 100 410 90 Q 420 80 430 90 Q 440 100 450 90 Q 460 80 470 90 Q 480 100 490 90"/>
        <path fill="none" stroke="#000" d="M 10 10 L 10 90"/>
        <path fill="none" stroke="#000" d="M 490 10 L 490 90"/>
        <path fill="none" stroke="#000" d="M 10 50 Q 250 0 490 50"/>
        <path fill="none" stroke="#000" d="M 10 50 Q 250 100 490 50"/>
        <path fill="none" stroke="#000" d="M 250 0 L 250 100"/>
        `
    },
    {
        title: "Learning Curve Clash",
        body: "Learning TypeScript is like climbing Mount Everest, challenging but rewarding. Learning Python is like strolling in a park, relaxing and refreshing.",
        svgPath: `<path fill="none" stroke="#000" d="M 10 10 Q 50 50 90 10 Q 130 50 170 10 Q 210 50 250 10 Q 290 50 330 10 Q 370 50 410 10 Q 450 50 490 10"/>
        <path fill="none" stroke="#000" d="M 10 90 Q 50 50 90 90 Q 130 50 170 90 Q 210 50 250 90 Q 290 50 330 90 Q 370 50 410 90 Q 450 50 490 90"/>
        <path fill="none" stroke="#000" d="M 10 10 L 10 90"/>
        <path fill="none" stroke="#000" d="M 490 10 L 490 90"/>
        <path fill="none" stroke="#000" d="M 10 50 Q 250 0 490 50"/>
        <path fill="none" stroke="#000" d="M 10 50 Q 250 100 490 50"/>
        <path fill="none" stroke="#000" d="M 250 0 L 250 100"/>
        <path fill="none" stroke="#000" d="M 10 10 Q 250 100 490 90"/>
        <path fill="none" stroke="#000" d="M 10 90 Q 250 0 490 10"/>
        `
    },
    {
        title: "Nature Narrative",
        body: "TypeScript is like a hyperactive toddler, dynamic and evolving. Python is like a wise old sage, stable and mature.",
        svgPath: `<path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="#00ffff" />
        <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="#000000" stroke-width="5" />
        <path d="M 10 10 Q 50 50 90 90" fill="none" stroke="#000000" stroke-width="5" />
        <path d="M 10 90 Q 50 50 90 10" fill="none" stroke="#000000" stroke-width="5" />
        <path d="M 10 10 Q 50 50 90 90" fill="none" stroke="#ff0000" stroke-width="5" />
        <path d="M 10 90 Q 50 50 90 10" fill="none" stroke="#00ff00" stroke-width="5" />
        <text x="25" y="35" font-family="Arial" font-size="20" fill="#000000">N</text>
        <text x="65" y="35" font-family="Arial" font-size="20" fill="#000000">N</text>
        <text x="25" y="75" font-family="Arial" font-size="20" fill="#000000">N</text>
        <text x="65" y="75" font-family="Arial" font-size="20" fill="#000000">N</text>
        `
    }
]


const messagesComponent = document.getElementById("messages_component")

messagesComponent?.replaceChildren()

const listMessages = (item: Content) => {
    const content: HTMLDivElement = document.createElement("div")

    content.innerHTML = `
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow">
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
`


    messagesComponent?.appendChild(content)
}

messageContent.map((item) => listMessages(item))


// How do you know if someone is a TypeScript developer?
// Just ask them their type!



// How do you make a TypeScript developer happy?
// Give them a generic gift!





// What do you call a TypeScript developer who doesn’t use interfaces?
// A loose cannon!




// How do you annoy a TypeScript developer?
// You tell them that JavaScript is better!


