import localQuizzes from './quizzes/quizzes.js'
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
        quizz: null,
        flowQuestion: 1, // 1 prepare, 2 playing, 3 answered, 4 solution,
        programm_cursor: 0,
        programm_quizz_cursor: 0,
        program: [],
        teams: [
            { color: 1, points: 0, key: 'a' },
            { color: 2, points: 0, key: 's' },
            { color: 3, points: 0, key: 'd' },
            { color: 4, points: 0, key: 'f' },
        ]

    })

    get programmQuizzCursor() {
        return this.data.programm_quizz_cursor;
    }

    get quizz() {
        return this.data.quizz;
    }

    get currentId() {
        return this.data.program[this.data.programm_cursor].quizzes[this.data.programm_quizz_cursor]
    }

    loadQuizz() {
        const currentId = this.currentId;
        this.data.quizz = this.getQuizzById(currentId);
        console.log('[toolService] quizz: ', toRaw(this.data.quizz))
    }

    saveToStore() {
        localStorage.setItem("programm_cursor", this.data.programm_cursor);
        localStorage.setItem("programm_quizz_cursor", this.data.programm_quizz_cursor);
    }

    readToStore() {
        this.data.programm_cursor = parseInt(localStorage.getItem("programm_cursor"));
        this.data.programm_quizz_cursor = parseInt(localStorage.getItem("programm_quizz_cursor"));
        this.data.program = JSON.parse(localStorage.getItem("programm"));
    }


    incrementProgrammCursor() {
        this.data.programm_quizz_cursor++;
        this.loadQuizz()
    }




    getQuizz(idx) {
        return this.data.quizzes[idx];
    }

    getQuizzById(id) {
        console.log(toRaw(this.data.quizzes))
        const found = this.data.quizzes.find((q) => {
            return q.id === id
        })

        return found
    }






    get flowQuestion() {
        return this.data.flowQuestion;
    }

    set flowQuestion(id) {
        console.log('[ToolService] flowQuestion', id)
        this.data.flowQuestion = id;
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

        this.data.quizzes = localQuizzes;
        return localQuizzes;

        // return fetch(`${this.domain}/sequences.php`, {
        //         method: 'GET',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //     })
        //     .then((res) => {
        //         return res.json()
        //     })
        //     .then((jsonResponse) => {
        //         if (jsonResponse.data) {
        //             this.data.quizzes = jsonResponse.data;
        //             return this.data.quizzes;
        //         }
        //     }, (error) => {
        //         console.error('[ToolService] fetchSeqs:', error)
        //     })
    }








}