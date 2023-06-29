interface Weapons {
    name: string,
    description: string;
    type: 'smgs' | 'sidearms' | 'shoutguns' | 'rifles' | 'snipers' | 'heavies' | 'melee',
    photo: string
}

export default Weapons 