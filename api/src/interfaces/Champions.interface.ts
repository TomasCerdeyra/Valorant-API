interface Champions {
    name: string;
    description: string;
    type: 'Sentinel' | 'Duelist' | 'Initiator' | 'Controller';
    habilities: string[];
}

export default Champions;