import { colleagues, friends } from './01-basics'
import {Friend, Colleague, EmailContact } from './myTypes'

function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

console.log(older(friends[0]))

// Using a callback on the older function
// For each friend in our array we will call the older function
function allOlder(fs: Friend[]) {
    const friends = fs.map(f => older(f))
    return friends
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

// Function to add a colleague to an array
// Setting the extension number to highest extension + 1
// Will need to callback the highestExtension function here.
function addColleague(colleagues: Colleague[], name: string, department: string, email: string) {
    const he = highestExtension(colleagues);
    const newExtension = he ? he.contact.extension + 1 : 1;
    const newColleague: Colleague = {
        name,
        department,
        contact: {
        email,
        extension: newExtension,
        },
    };
    colleagues.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length)));

// Function to find friends.
// Searches an array of friends for those that satisfy a criterion.
// The criterion is specified as a callback.
function findFriends(
  friends: Friend[],
  sorter: (f: Friend) => boolean
): string[] {
  const sorted = friends.filter(sorter);
  const result: string[] = sorted.map((fe) => fe.name);
  return result 
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Ry')));
console.log(findFriends(friends, (friend) => friend.age < 35));
