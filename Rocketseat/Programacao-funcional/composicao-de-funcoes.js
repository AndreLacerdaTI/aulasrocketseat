const people = ['Rafa', 'Diego', 'Daniel', 'Rod']
const upperCasePeopleThatStartWithD = people
.filter(person => person.startsWith('D'))
.map(dperson => dperson.toUpperCase())