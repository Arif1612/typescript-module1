//destructuring

// object destructuring

{
    const user = {
        id:345,
        name:{
            firstName:'Arif',
            middleName:'Ul',
            lastName: 'Islam'
        },
        contactNo: "0275151511",
        address: "uganda",
    };
    const { contactNo, name: {middleName}, } = user;

}

// array destructuring

const myFriends = [ 'ross','taylor','jack','linkon','rolex','joy'];
const [,,c,...rest] = myFriends;