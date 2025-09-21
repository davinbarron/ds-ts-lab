import {Friend, Colleague, ColleagueHistory } from './myTypes'

// (Optional) Change the names below to your friends.

const friend1: Friend = {
  name: "Ryan Walsh",
  phone: "087-12345",
  age: 20,
  dob: new Date("2005-11-20"),
};

const friend2: Friend = {
  name: "Oskar Szopinski",
  phone: "086--12345",
  age: 20,
  interests: ['Gaming', 'Music']
};

// Test for intersection function
const friend3: Friend = {
  name: "Ralph Graham",
  phone: "085-12344",
  age: 30,
  interests: ['Swimming', 'Rugby']
};

export const friends: Friend[] = [friend1, friend2, friend3];

//console.log(friends[1]);

//   -------------------

const colleague1: Colleague = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

export const colleagues : ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

//console.log(colleagues.current[0]);
