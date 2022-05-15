import { faker } from '@faker-js/faker'

exports.getNotes = () => {
    const notes = []
    for (let i = 1; i <= 10000; i++) {
        notes.push(getFakeNote(i))
    }
    return notes
}

function getFakeNote (id) {
    return {
        id,
        title: faker.random.word(2),
        description: faker.random.word(12),
    }
}