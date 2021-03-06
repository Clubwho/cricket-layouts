"use strict";
'use-strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nodecgApiContext = require("./util/nodecg-api-context");
const nodecg = nodecgApiContext.get();
const matchRep = nodecg.Replicant('match');
const currentInningsRep = nodecg.Replicant('currentInnings', { persistent: false });
// import * as util from 'util';
nodecg.listenFor('updateMatch', (data) => {
    matchRep.value = data;
});
nodecg.listenFor('newInnings', (data) => {
    const bowlingPlayers = createBowlersObjects(data.bowlingTeam);
    const battingPlayers = createBatterObjects(data.battingTeam);
    bowlingPlayers[0].bowling = true;
    let newInnings = {
        wickets: 0,
        runs: 0,
        extras: 0,
        overs: [],
        bowlingTeam: data.bowlingTeam.name,
        battingTeam: data.battingTeam.name,
        TLAs: [data.bowlingTeam.tla, data.battingTeam.tla],
        bowlers: bowlingPlayers,
        batsmen: battingPlayers
    };
    currentInningsRep.value = newInnings;
    nodecg.log.info('New innings started! Batters: ' + newInnings.battingTeam + ' | Bowlers: ' + newInnings.bowlingTeam);
});
function createBowlersObjects(bowlingTeam) {
    let buildingBowlers = [];
    // Reset each player to default
    bowlingTeam.players.forEach(player => {
        let bowlingObj = {
            name: player.name,
            overs: '0',
            maidenOvers: 0,
            runs: 0,
            wickets: 0,
            badBalls: [0, 0],
            bowling: false
        };
        buildingBowlers.push(bowlingObj);
    });
    return buildingBowlers;
}
function createBatterObjects(battingTeam) {
    let buildingBatters = [];
    const filteredBattingTeam = battingTeam.players.filter(batter => {
        return batter != null;
    });
    // Reset each player to default
    filteredBattingTeam.forEach(player => {
        let batterObj = {
            name: player.name,
            runs: 0,
            fours: 0,
            sixes: 0,
            balls: 0,
            dismissal: "",
            batting: "WAITING",
            facing: false
        };
        buildingBatters.push(batterObj);
    });
    return buildingBatters;
}
nodecg.listenFor('updateBattingRoster', (updatedBatters) => {
    // Push each batter into the batting roster	
    let batters = updatedBatters.filter(batter => {
        return batter != null;
    });
    batters[0].batting = "BATTING";
    batters[0].facing = true;
    batters[0].name += '*';
    batters[1].batting = "BATTING";
    // Set first two batters as on pitch
    currentInningsRep.value.batsmen = batters;
});
//# sourceMappingURL=matchsetup.js.map