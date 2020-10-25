function friendmain(stringip, stringArr) {
    let friendlistArr = stringip.split(',');

    stringArr.foreach(item => {

        let commandName = item.split(' ');
        let comm = commandName[0];
        let name = commandName[1];

        switch(comm) {
            case 'Blacklist':
                let itemPos = friendlistArr.indexOf(name);

                if (itemPos == -1){
                    console.log(`${name} was not found`);
                }

                friendlistArr[itemPos] = 'Blacklisted';
                console.log(`${name} was blacklisted`);
                break;
        }

        let a;
        
    });
}
friendmain(`Mike, John, Eddie`, [`Blacklist Mike`, `Error 0`, `Error 1`, `Change 2 Mike123`, `Report`]);

