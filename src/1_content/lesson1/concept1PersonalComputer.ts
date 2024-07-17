import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 1;
const name: string = 'Personal Computer';

export const concept1PersonalComputer: ConceptContent = {
    heading: `${ContentEnum.CHAPTER} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson1/lesson1concept1.jpg'),
    number,
    name,
    definition: [
        'Machine to write, test and manage code locally'
    ],
    reason: [
        {
            buzzword: 'Accessibility',
            explanation: 'Immediate access to development tools',
        },
        {
            buzzword: 'Convenience',
            explanation: 'Work from anywhere with ease',
        },
        {
            buzzword: 'Customization',
            explanation: 'Use preferred software, settings, and configurations.',
        },
    ],
    sidenotes: [],
    references: [
        {
            title: 'Apple MacBook Pro M3',
            imageLink: require('@/assets/cover/cover_personalcomputer_apple.jpg'),
            weblinks: {
                US: 'https://amzn.to/3xlcyMi',
                UK: 'https://amzn.to/45xYhZj',
                DE: 'https://amzn.to/3XE3z3l',
                FR: 'https://amzn.to/4eDaBeH',
                JP: 'https://amzn.to/3zcKlaR',
                CA: 'https://amzn.to/3zb1r8Z',
                IT: 'https://amzn.to/3KVtr3b',
                SP: 'https://amzn.to/4cpdxKk',
                AU: 'https://amzn.to/45E8hjz',
                NL: 'https://amzn.to/4bke3bg',
                SW: 'https://amzn.to/3KXEzMQ',
                PL: 'https://amzn.to/3XCoLa8',
                BE: 'https://amzn.to/4bioTyB',
            }
        },
        {
            title: 'Microsoft Surface Laptop',
            imageLink: require('@/assets/cover/cover_personalcomputer_microsoft.jpg'),
            weblinks: {
                US: 'https://amzn.to/45EJRXq',
                UK: 'https://amzn.to/3RzBHtd',
                DE: 'https://amzn.to/3XzgQKq',
                FR: 'https://amzn.to/3KYG4KV',
                JP: 'https://amzn.to/4ew4EjH',
                CA: 'https://amzn.to/3KUgLtm',
                IT: 'https://amzn.to/3KUhlaw',
                SP: 'https://amzn.to/4c9rxrC',
                AU: 'https://amzn.to/3VDPikN',
                NL: 'https://amzn.to/45ziCNR',
                SW: 'https://amzn.to/3VDyutR',
                PL: 'https://amzn.to/4bf7pDa',
                BE: 'https://amzn.to/3VUaOD2',
            }
        },
        {
            title: 'Lenovo ThinkPad',
            imageLink: require('@/assets/cover/cover_personalcomputer_thinkpad.png'),
            weblinks: {
                US: 'https://amzn.to/3RElLpS',
                UK: 'https://amzn.to/3RGqzep',
                DE: 'https://amzn.to/4cz7nXM',
                FR: 'https://amzn.to/3Vxzj7L',
                JP: 'https://amzn.to/4cui6Tt',
                CA: 'https://amzn.to/3zfU8x3',
                IT: 'https://amzn.to/45EN7C8',
                SP: 'https://amzn.to/3xi4mMQ',
                AU: 'https://amzn.to/4eB2uzf',
                NL: 'https://amzn.to/45y8ZPv',
                SW: 'https://amzn.to/3VyPUYN',
                PL: 'https://amzn.to/3VVdv7w',
                BE: 'https://amzn.to/4bf9JKo',
            }
        },
    ],
}