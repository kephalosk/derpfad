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
            weblink: 'https://www.amazon.com/Apple-MacBook-Laptop-12%E2%80%91core-18%E2%80%91core/dp/B0CM5KXB2B'
        },
        {
            title: 'Microsoft Surface',
            imageLink: require('@/assets/cover_personalcomputer_microsoft.jpg'),
            weblink: 'https://www.amazon.com/Microsoft-Surface-Laptop-Studio-Touchscreen/dp/B0CDK3H8XH'
        },
        {
            title: 'Lenovo ThinkPad',
            imageLink: require('@/assets/icon_thinkpad.png'),
            weblink: 'https://www.amazon.com/Lenovo-ThinkPad-Business-i7-1165G7-Fingerprint/dp/B0CHFVYMBC'
        },
    ],
}