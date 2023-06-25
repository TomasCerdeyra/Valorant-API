interface Champions {
    name: string;
    description: string;
    type: 'Sentinel' | 'Duelist' | 'Initiator' | 'Controller';
    habilities: {
        hability1: string;
        hability2: string;
        hability3: string;
        hability4: string;
    };
}

export default Champions;