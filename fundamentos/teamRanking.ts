import {Result, results} from "./data/results";

//Somar os pontos por equipe e ordenar por ordem crescente de pontuação

interface TeamResult {
    team: string;
    points: number;
}

const rankedTeams = (results: Result[]) => {
    const teamResults: TeamResult[] = []

    for (let i = 0; i < results.length; i++) {
        let info = results[i];
        let time = info.team;

        teamResults.push({
            team: info.team,
            points: info.points
        })
    }

    return teamResults;
}

// resultado esperado = [{team: "Red Bull", points: 50}, { team: "Mercedes", points: 45}, { team: McLaren, points: 38 }, { team: "Ferrari", points: 28}]

const teamResults = rankedTeams(results);

console.log(teamResults)
