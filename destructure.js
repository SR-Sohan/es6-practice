
const person = { name:'Sohan',age:24,gfName:'tumi',phone:'01302460356',friends:['Nahid','Anis','Washim']}

// const {name,phone,gfName} = person;

// console.log(name,phone,gfName);

const complexObject = {
    name: 'Sohan',
    addres: {
        live: 'Mirpur',
        job: 'Developer'
    }
}

// const {job} = complexObject.addres;
// console.log(job);

const friedns =['Washim','Sisir','Nahid','Rajib']

const [firstFriend,nextFriend,...allFriends] = friedns;

console.log(firstFriend,nextFriend,allFriends);