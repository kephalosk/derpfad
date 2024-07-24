import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 30;
const name: string = 'Service Network';

export const concept30ServiceNetwork: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept30.jpg'),
    number,
    name,
    definition:  [
        'Network setup allowing communication between services within a Kubernetes cluster',
    ],
    reason: [
        {
            buzzword: 'NodePort',
            explanation: 'Exposes the service on a static port on each node\'s IP',
        },
        {
            buzzword: 'DNS Resolution',
            explanation: 'Services are automatically discoverable via DNS names within the cluster',
        },
        {
            buzzword: 'Network Policies',
            explanation: 'Controls and restricts network traffic between services',
        }
    ],
    sidenotes: [],
    references: [],
}