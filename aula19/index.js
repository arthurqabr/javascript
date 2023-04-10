const nameFor = 'Arthur Carvalho';

for (let i = 0; i <nameFor.length; i++) {
    console.log(nameFor[i]);
}

console.log('#######')

for (let i in nameFor) {
    console.log(nameFor[i]);
}

console.log('#######')

for (let value of nameFor){
    console.log(value)
}

console.log('#######')

