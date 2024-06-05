import { machine_clothefloor, machine_clothefold, machine_delivery, machine_manwash, machine_towels } from "../assets/images";

export const servicesData = [
    {
        id: "67649",
        text: "Washing",
        image: machine_manwash,
        info: "The header element represents introductory content for its nearest ancestor sectioning content or sectioning root element. A header typically contains a group of introductory or navigational aids.",
        link: "washing",
    },
    {
        id: "67650",
        text: "Ironing",
        image: machine_towels,
        info: "When the nearest ancestor sectioning content or sectioning root element is the body element, then it applies to the whole page. The div element has no special meaning at all.",
        link: "ironing",
    },
    {
        id: "67651",
        text: "Sorting",
        image: machine_clothefloor,
        info: "The script element allows authors to include dynamic script and data blocks in their documents. The element does not represent content for the user. The div element has no special meaning at all. It represents its children. It can be used with the class, lang, and title.",
        link: "sorting",
    },
    {
        id: "67652",
        text: "Packaging",
        image: machine_clothefold,
        info: "The span element doesn't mean anything on its own, but can be useful when used together with the global attributes, e.g. class, lang, or dir. It represents its children. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.",
        link: "packaging",
    },
    {
        id: "67653",
        text: "Delivery",
        image: machine_delivery,
        info: "The nav element represents a section of a page that links to other pages or to parts within the page: a section with navigation links. It can be used with the class, lang, and title attributes to mark up semantics common to a group of consecutive elements.",
        link: "delivery",
    },
]