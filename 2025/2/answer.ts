// @ts-check

const input: string[] = [
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

let total: number = 0
let invalidIds: number[] = []

// Check factors except itself.
const factors = (input: number) => [...Array(input + 1).keys()].filter(index => input %index === 0).filter(index => index !== input)

const checkInvalid = (id: string, factor: number) => {
    // Split ID string into segments by factor, then flatten (using Set). If the Set size is 1, then all array items are equal, meaning the ID contains repeated characters and is invalid.
    const segments = new Set(id.match(new RegExp(`.{${factor}}`, 'g')))

    return segments.size === 1
}

input.map(range => {
    const [min, max] = range.split('-')

    for (let index: number = Number(min); index < Number(max) + 1; index++) {
        const id: string = String(index)
        if (factors(id.length).length >= 1) {
            factors(id.length).map(factor => {
                // Check for invalid ID. If the current ID has already been confirmed as invalid, don't test it again with a new factor.
                if (checkInvalid(id, factor)) invalidIds.push(index)
            })
        }
    }
});

// Remove duplicate IDs from the array and then sum them up.
total = [...new Set(invalidIds)].filter(Boolean).reduce((count, index) => count + index)

console.log(total)