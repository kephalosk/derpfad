import {ConceptContent} from "@/globals/Types/ConceptContent";

export const concept4: ConceptContent = {
    heading: 'Concept 4: HTML',
    image: require('@/assets/conceptpath/lesson1concept4.svg'),
    name: 'HTML',
    definition: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on web pages.',
    buzzwords: [
        'Foundation of Web Pages',
        'Standardized and Universally Supported',
        'Easy to Learn and Use'
    ],
    explanations: [
        'HTML is the fundamental building block of web pages.',
        'As a standard maintained by the World Wide Web Consortium (W3C), HTML is universally supported by all web browsers.',
        'HTML is relatively simple to learn, with a clear and intuitive syntax.'
    ],
    references: [
        {
            title: 'Jon Duckett: HTML and CSS: Design and Build Websites',
            imageLink: require('@/assets/cover_html_duckett.jpg'),
            weblink: 'https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189'
        },
        {
            title: 'Mike Mcgrath: HTML in Easy Steps',
            imageLink: require('@/assets/cover_html_mcgrath.jpg'),
            weblink: 'https://www.amazon.com/HTML-easy-steps-Mike-McGrath/dp/1840788763'
        },
        {
            title: 'Elisabeth Robson, Eric Freeman: Head First HTML and CSS: A Learner\'s Guide to Creating Standards-Based Web Pages',
            imageLink: require('@/assets/cover_html_robsen.jpg'),
            weblink: 'https://www.amazon.com/Head-First-HTML-CSS-Standards-Based/dp/0596159900'
        },
    ],
}