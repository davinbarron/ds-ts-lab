import { friends } from './01-basics'
import {Friend, Colleague } from './myTypes'

function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

function allOlder(fs: Friend[]) : string[] {
    const friends = fs.map(f => older(f))
    return friends
}

console.log(allOlder(friends))

