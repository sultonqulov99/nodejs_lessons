
export default async ({ sequelize }) => {
    await sequelize.models.Level.bulkCreate([
        {
            level_name: 'A0 English (Beginner)',
            active: true
        },
        {
            level_name: 'A1 English (Elementary)',
            active: false
        },
        {
            level_name: 'A2 English (Pre Intermediate)',
            active: false
        },
        {
            level_name: 'B1 English (Intermediate)',
            active: false
        },
        {
            level_name: 'B2 English (Upper Intermediate)',
            active: false
        },
        {
            level_name: 'C1 English (Advanced)',
            active: false
        },
        {
            level_name: 'C2 English (Proficient)',
            active: false
        },
    ])

    await sequelize.models.Test.bulkCreate([
        {
            name: 'Test 1',
            level_id:1
        },
        {
            name: 'Test 2',
            level_id:2
        },
        {
            name: 'Test 3',
            level_id:3
        },
        {
            name: 'Test 4',
            level_id:4
        },
        {
            name: 'Test 5',
            level_id:5
        }
    ])

    await sequelize.models.Tense.bulkCreate([
        {
            name: 'Present tenses',
            level_id:1
        },
        {
            name: 'Past tenses',
            level_id:1
        },
        {
            name: 'Future tenses',
            level_id:1
        }
    ])
    await sequelize.models.Sub_tense.bulkCreate([
        {
            name: 'Present simple tenses example',
            tense_id:1
        },
        {
            name: 'Present continuous tenses example',
            tense_id:1
        },
        {
            name: 'Present perfect tenses example',
            tense_id:1
        },
        {
            name: 'Present perfect continuous tenses example',
            tense_id:1
        },
        {
            name: 'Past simple tenses example',
            tense_id:2
        },
        {
            name: 'Past continuous tenses example',
            tense_id:2
        },
        {
            name: 'Past perfect tenses example',
            tense_id:2
        },
        {
            name: 'Past perfect continuous tenses example',
            tense_id:2
        },
        {
            name: 'Future simple tenses example',
            tense_id:3
        },
        {
            name: 'Future continuous tenses example',
            tense_id:3
        },
        {
            name: 'Future perfect tenses example',
            tense_id:3
        },
        {
            name: 'Future perfect continuous tenses example',
            tense_id:3
        },
    ])
}
