{
    //spread operator
    //rest operator
    //destructuring

    // learn spread operator

    const bros1:string[] = ['mir','mizan','firoz'];
    const bros2:string[] = ['tonmoy','nahid','rahat'];

    bros1.push(...bros2);

    // Object


    const mentors1 = {
        typescript: 'Mezba',
        redux:'Mir',
        dbms: 'Mizan'
    }
    const mentors2 = {
        prisma: 'Firoz',
        next:'Tonmoy',
        cloud: 'Nahid'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // learn rest operator

    const greetFriends = (...friends: string[]) => {
       friends.forEach((friend:string)=> console.log(`Hi ${friend}`))
    }

    greetFriends('abol','table','gabul','moggul');

}