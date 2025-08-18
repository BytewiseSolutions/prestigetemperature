export interface Service {
    id: number;
    title: string;
    image: string;
    description: string;
}

export const SERVICES: Service[] = [
    {
        id: 1,
        title: 'VRV System Heating',
        image: '/assets/images/service1.webp',
        description: 'Professional installation of residential and commercial AC systems.'
    },
    {
        id: 2,
        title: 'Aircon Repairs & Installations',
        image: '/assets/images/service2.webp',
        description: 'Scheduled maintenance to extend the life of your equipment.'
    },
    {
        id: 3,
        title: 'Freon Air Conditioner Refill',
        image: '/assets/images/service3.webp',
        description: 'Fast and reliable repair of all AC and refrigeration systems.'
    },
    {
        id: 4,
        title: 'Fridge & Freezer Repair',
        image: '/assets/images/service4.webp',
        description: 'Professional installation of residential and commercial AC systems.'
    },
    {
        id: 5,
        title: 'System Replacement',
        image: '/assets/images/service5.webp',
        description: 'Scheduled maintenance to extend the life of your equipment.'
    },
    {
        id: 6,
        title: 'Pipe Cleaning',
        image: '/assets/images/service6.webp',
        description: 'Fast and reliable repair of all AC and refrigeration systems.'
    },
    {
        id: 7,
        title: 'Exhaust Fan Cleaning',
        image: '/assets/images/service7.webp',
        description: 'Scheduled maintenance to extend the life of your equipment.'
    },
    {
        id: 8,
        title: 'Appliance Repairs',
        image: '/assets/images/service8.webp',
        description: 'Fast and reliable repair of all AC and refrigeration systems.'
    }
];