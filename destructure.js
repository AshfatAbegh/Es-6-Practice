const person = {name:"william", age:17, job:"worker", friendName:"Asif", address:"Motijheel", phone:"03164651654654", friends:["Tom Hanks", "Kroos"]}
const {phone, friendName} = person;
const complexObject = {
    name:"abc",
    info:{
        address: "Motijheel",
        leader: "Tiger"
    }
}
const {leader} = complexObject.info;
// const friend = person.friendName;
// const phone = person.phone;
console.log(friendName,phone,leader);