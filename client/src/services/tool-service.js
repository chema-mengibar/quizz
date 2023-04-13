//import DemoJson from './sequences/demo.json'
import { toRaw, reactive } from "vue";





export default class ToolService {

    domain = '//drill-trainer-server.motuo.info'

    rounds = [{
            type: 'ALL_TEAMS',
            questions_count: 20
        },
        {
            type: 'SINGLE_TEAMS',
            questions_count: 10
        },
        {
            type: 'ALL_TEAMS',
            questions_count: 20
        }
    ]

    flow = {
        round_idx: 0,
        team_color: 1
    }

    data = reactive({
        quizzes: [],
        quizz: 0,
        flowQuestion: 1, // 1 prepare, 2 playing, 3 answered, 4 solution
        teams: [
            { color: 1, points: 0, key: 'a' },
            { color: 2, points: 0, key: 's' },
            { color: 3, points: 0, key: 'd' },
            { color: 4, points: 0, key: 'f' },
        ]

    })


    constructor() {}

    get flowQuestion() {
        return this.data.flowQuestion;
    }

    set flowQuestion(id) {
        console.log('[ToolService] flowQuestion', id)
        this.data.flowQuestion = id;
    }

    get quizz() {
        return this.data.quizz;
    }

    set quizz(q) {
        this.data.quizz = q;
    }


    get teamsKeys() {
        return this.data.teams.map(team => {
            return team.key
        })
    }

    getTeamByKey(key) {
        return toRaw(this.data.teams.find(team => team.key === key))
    }

    addPointsToTeamByKey(key) {
        const team = toRaw(this.data.teams.find(team => team.key === key))
        if (team) {
            team.points += 500;
        }
    }





    updateFromRouter(queryObj) {
        console.log('[ToolService] updateFromRouter:', queryObj);
        const queryMod = {
            ...queryObj
        }
        return queryMod;
    }

    nextQuizz(queryObj) {
        console.log('[ToolService] nextQuizz:', queryObj);
        const queryMod = {
            test: 'dos'
        }
        this.quizz = Date.now();
        return queryMod;
    }

    getTeamsByPoints() {
        return this.teams.sort(
            (p1, p2) => (p1.points < p2.points) ? 1 : (p1.points > p2.points) ? -1 : 0);
    }

    getTeamsProcent(points) {
        const max = this.getTeamsByPoints()[0].points;
        if (max === 0) {
            return 1;
        }
        const result = (points * 100) / max;
        return result;
    }

    get teams() {
        return this.data.teams
    }

    getImagePath(fileName) {
        return `${this.domain}/images/${fileName}`
    }

    async fetchQuizzes() {
        return fetch(`${this.domain}/sequences.php`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return res.json()
            })
            .then((jsonResponse) => {
                if (jsonResponse.data) {
                    this.data.quizzes = jsonResponse.data;
                    return this.data.quizzes;
                }
            }, (error) => {
                console.error('[ToolService] fetchSeqs:', error)
            })
    }








}