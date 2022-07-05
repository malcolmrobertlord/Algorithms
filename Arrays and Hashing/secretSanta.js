// Given a  list of players pair up players so that:
// 1. each player gives one gift, and receives one gift
// 2. players can't give/receive to themselves
// 3. players must be selected at random each time run

//Example input: ["bob", "joe", "kelly", "megan"]
//Example output: [["bob", "joe"], ["kelly", "megan"]]

const secretSanta = (players) => {
    let pairs = []
    while (players.length > 0){
        let temp = [];
        console.log("this is players length" + players.length)
        let randIdx = Math.floor((Math.random()* (players.length - 1)) + 1);
        console.log(randIdx)
        temp.push(players[0], players[randIdx])
        console.log(temp)
        pairs.push(temp)
        let playersCopy = players;
        players.splice(0,1)
        players.splice(randIdx-1,1)
    }
    return pairs;
}

console.log(secretSanta(["bob", "joe", "kelly", "megan"]));