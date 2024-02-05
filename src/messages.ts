interface Content {
    title: string,
    body: string,
}

const messageContent = (): Content[] => {
    return [
        {
            title: "The Transpilation Tribulation",
            body: "TypeScript is like that over-prepared student who writes, rewrites, and then transcribes their essay before submitting it. Python, on the other hand, is the cool kid who just wings it and still gets an A."
        },
        {
            title: "Syntax Showdown",
            body: "TypeScript’s syntax is like a high-maintenance date, with all its rules and symbols. Python’s syntax is like a chill friend who’s always easy to hang out with."
        },
        {
            title: "Type Tyranny vs Dynamic Democracy",
            body: "TypeScript is the strict teacher who wants every ‘i’ dotted and ‘t’ crossed. Python is the laid-back substitute who lets you explore and learn at your own pace."
        },
        {
            title: "Generic Jamboree vs Polymorphic Party",
            body: "TypeScript’s generics are like a Swiss army knife, versatile but complicated. Python’s polymorphism is like a spork, simple and effective."
        },
        {
            title: "Interface Intrigue vs Assertion Adventure",
            body: "TypeScript’s interfaces are like a formal contract, rigid but reliable. Python’s type assertions are like a gentleman’s agreement, flexible and friendly."
        },
        {
            title: "Enum Enigma vs Dictionary Dilemma",
            body: "TypeScript’s enums are like a set menu at a restaurant, limited but clear. Python’s dictionaries and sets are like a buffet, diverse and delightful."
        },
        {
            title: "Decorator Duel",
            body: "TypeScript’s decorators are like a secret sauce, obscure but impactful. Python’s decorators are like an open recipe, transparent and transformative."
        },
        {
            title: "Namespace Nuisance vs Module Magic",
            body: "TypeScript’s namespaces are like a meticulously organized library, verbose but manageable. Python’s modules are like a cozy book club, compact and collaborative."
        },
        {
            title: "Ecosystem Extravaganza",
            body: "TypeScript’s ecosystem is like a bustling city, diverse but chaotic. Python’s ecosystem is like a well-planned community, unified and harmonious."
        },
        {
            title: "Learning Curve Clash",
            body: "Learning TypeScript is like climbing Mount Everest, challenging but rewarding. Learning Python is like strolling in a park, relaxing and refreshing."
        },
        {
            title: "Nature Narrative",
            body: "TypeScript is like a hyperactive toddler, dynamic and evolving. Python is like a wise old sage, stable and mature."
        }
    ]
}


export { messageContent, Content }
