import {ConceptContent} from "@/globals/Types/ConceptContent";

export const concept1: ConceptContent = {
    heading: 'Concept 1: Personal Computer',
    image: require('@/assets/conceptpath/lesson1concept1.svg'),
    name: 'a Personal Computer',
    definition: 'A Personal Computer is a machine used by developers to write, test and manage code locally.',
    buzzwords: [
        'Accessibility and Convenience',
        'Customization and Control',
        'Cost-Effectiveness'
    ],
    explanations: [
        'Personal computers provide immediate access to development tools and resources, allowing developers to work from anywhere with ease.',
        'Developers can customize their personal computers with preferred software, settings, and configurations tailored to their specific needs and workflows.',
        'Using a personal computer eliminates the need for expensive server infrastructure for development and testing, making it a cost-effective solution for web development tasks.'
    ],
    references: [
        {
            title: 'Apple MacBook',
            imageLink: require('@/assets/cover_personalcomputer_apple.jpg'),
            weblink: 'https://amzn.to/3XwWYaQ'
        },
        {
            title: 'Microsoft Surface',
            imageLink: require('@/assets/cover_personalcomputer_microsoft.jpg'),
            weblink: 'https://amzn.to/4cv1V8n'
        },
        {
            title: 'Lenovo ThinkPad',
            imageLink: require('@/assets/icon_thinkpad.png'),
            weblink: 'https://amzn.to/3xhAArz'
        },
    ],
}