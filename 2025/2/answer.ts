// @ts-check

const input = [
    '78847-119454',
    '636-933',
    '7143759788-7143793713',
    '9960235-10043487',
    '44480-68595',
    '23468-43311',
    '89-123',
    '785189-1014654',
    '3829443354-3829647366',
    '647009-692765',
    '2-20',
    '30-42',
    '120909-197026',
    '5477469-5677783',
    '9191900808-9191943802',
    '1045643-1169377',
    '46347154-46441299',
    '2349460-2379599',
    '719196-779497',
    '483556-641804',
    '265244-450847',
    '210541-230207',
    '195-275',
    '75702340-75883143',
    '58-84',
    '2152-3237',
    '3367-5895',
    '1552-2029',
    '9575-13844',
    '6048-8966',
    '419388311-419470147',
    '936-1409',
    '9292901468-9292987321'
]

let total = 0

input.forEach(input => {
    const split = input.split('-')
    console.log(split)

    for (let id = Number(split[0]); id < Number(split[1]) + 1; id++) {
        const idString = id.toString()

        // Check if the current ID is of an equal string length then split to test if both sides of that string are equal.
        if (idString.length % 2 === 0) {
            const idLeftSplit = Number(idString.slice(0, idString.length/2))
            const idRightSplit = Number(idString.slice(idString.length/2, idString.length))
            if (idLeftSplit === idRightSplit) {
                total += id
            }
        }
    }
});

console.log(total)