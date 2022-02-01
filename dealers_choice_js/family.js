const family = [
    { name: "Jackie Smith", age: 24, gender: "female", yearMet: 2013, relation: "Spouse"},
    {name: "Gary Smith Sr", age: 62, gender: "male", yearMet: 1997, relation: "Father"},
    {name: "Melissa Smith", age: 61, gender: "female", yearMet: 1997, relation: "Mother"},
    {name: "Clinton Smith", age: 42, gender: "female", yearMet: 1997, relation: "Brother"},
    {name: "Christian Hamilton", age: 33, gender: "female", yearMet: 1997, relation: "Sister"},
    {name: "Ariel Hamilton", age: 31, gender: "female", yearMet: 1997, relation: "Sister"},
    
];

const familyList = () => [...family];


module.exports = {familyList}
