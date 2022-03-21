let student = {
    id: 163895,
    section: 'B',
    shift: '2nd',
    department: 'Computer Science',
    session: '2018-19'
};
let { id, shift, department, section } = student;
console.log(id, shift);
console.log(department, section);

// nasted object
// let phone = {
//     modelName: 'Galaxy S22 Ultra',
//     brandName: 'Samsung',
//     memory: {
//         ram1: '8GB',
//         ram2: '12GB'
//     },
//     sotrage: {
//         storage1: '128GB',
//         storage2: '256GB',
//         storage3: '512GB'
//     },
//     price: '$1399'
// };
// let { ram1 } = phone.memory;
// let { storage1, storage3 } = phone.sotrage;
// let { modelName } = phone;
// console.log(ram1);
// console.log(storage1, storage3);
// console.log(modelName);