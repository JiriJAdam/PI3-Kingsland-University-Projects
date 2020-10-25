//experience gaming
function main(experienceNum, battlesNum, earnedExpArr) {
    let sumExp = 0;
    let battleCount = 0;
    let neededExperience = 0;
    let everyThirdBattleExp = 0;
    let everyFifthBattleExp = 0;
    for (i = 0; i < earnedExpArr.length; i++) {
        if (sumExp <= experienceNum) { //(400, 5, [50,100,200,100,20])
            sumExp += earnedExpArr[i];
            if ((i + 1) % 3 == 0) {
                everyThirdBattleExp = (earnedExpArr[i] * 0.15).toFixed(2);
                sumExp += Number(everyThirdBattleExp);
            } else if ((i + 1) % 5 == 0) {
                everyFifthBattleExp = (earnedExpArr[i] * 0.10).toFixed(2);
                sumExp -= Number(everyFifthBattleExp);
            }
            battleCount++;
        }
    }
    if (sumExp >= experienceNum) {
        console.log(`The player successfully collected the needed experience from ${battleCount} battles.`);
    } else {
        neededExperience = (experienceNum - Number(sumExp)).toFixed(2);
        console.log(`The player was not able to collect the necessary experience, ${neededExperience} more needed.`);
    }
}

//friend list maintenence 
function friendmain(stringip, stringArr){
    let friendlistArr = stringip.split(',');
    friendlistArr = friendlistArr.map(name => { return name.trim()});
    stringArr.forEach(item => {
        let commandName = item.split(' ');
        let comm = commandName[0];
        let name = commandName[1];
        switch(comm){
            case 'Blacklist':
                let itemPos = friendlistArr.indexOf(name);
                if(itemPos == -1){
                    console.log(`${name} was not found.`);
                }else{
                    friendlistArr[itemPos] = 'Blacklisted';
                    console.log(`${name} was blacklisted.`);
                }                
                break;
            case 'Error':
                let posIndex = Number(commandName[1]);
                let elementName = friendlistArr[posIndex];
                if(elementName != 'Blacklisted' && elementName != 'Lost'){
                    friendlistArr[posIndex] = 'Lost';
                    console.log(`${elementName} was lost due to an error.`); 
                }
                break;
            case 'Change':
                let posIndex2 = Number(commandName[1]);
                let nameChange = commandName[2];
                if(posIndex2>=0  && posIndex2<= friendlistArr.length -1){
                    let orgName = friendlistArr[posIndex2];
                    friendlistArr[posIndex2] = nameChange;
                    console.log(`${orgName} changed his username to ${nameChange}.`);                    
                }              
        }           
    });
    let blackC = 0;
    let lostC = 0;
    friendlistArr.forEach(friendName => {
        if(friendName == 'Blacklisted' ){
            blackC++;
        } else if(friendName == 'Lost' ){
            lostC++;
        }
    });
        console.log(`Blacklisted names: ${blackC}`);
        console.log(`Lost names: ${lostC}`);
        console.log(friendlistArr.join(' '));
}
friendmain(`Mike, John, Eddie, William`,[`Error 3`,`Error 3`,`Change 0 Mike123`,`Blacklist Eddie`,`Report`]);