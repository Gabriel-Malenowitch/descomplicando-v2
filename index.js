const print = (questions) => {
    // Request a buscar: undergrad/questions/assertions-corrections?assertions
    const splitter = (array, size) => {
        const groups = [];
        for (let i = 0; i < array.length; i += size) {
            groups.push(array.slice(i, i + size));
        }
        return groups;
    }

    const splitedQuestions = splitter(questions, 5)
    splitedQuestions.forEach((question, index) => {
        let letters = ['A', 'B', 'C', 'D', 'E']
        let answerNumber = 0
        question.forEach((answer, index) => {
            if(answer.correct) {
                answerNumber = index
            }
        })
        console.log(`Exercício ${index + 1} - Resposta: ${letters[answerNumber]}`)
    })
}