import {ConceptContent} from "@/globals/Types/ConceptContent";
import {ContentEnum} from "@/globals/ContentEnum";

const number: number = 30;
const name: string = 'Service Network';

export const concept30ServiceNetwork: ConceptContent = {
    heading: `${ContentEnum.CONCEPT} ${number}: ${name}`,
    image: require('@/assets/conceptpath/lesson3/lesson3concept30.jpg'),
    number,
    name,
    notes: [
        'Network setup allowing communication between services within a Kubernetes cluster',
        'NodePort: Exposes the service on a static port on each node\'s IP',
        'DNS Resolution: Services are automatically discoverable via DNS names within the cluster',
        'Network Policies: Controls and restricts network traffic between services',
    ],
    references: [],
}