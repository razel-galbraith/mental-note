exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('diary')
    .del()
    .then(function () {
      return knex('diary').insert([
        {
          id: 1,
          created_on: '2022-10-12',
          emoji: '😩',
          thoughts: `Today was so rough. I'm having a hard time. I'm excited.`,
          comments: `Started new job today.`,
        },
        {
          id: 2,
          created_on: '2022-10-24',
          emoji: '😔',
          thoughts: `I'm feeling a bit sad.`,
          comments: `Went for a run and it helped.`,
        },
        {
          id: 3,
          created_on: '2022-11-04',
          emoji: '😊',
          thoughts: `I'm floating. Worry-free.`,
          comments: `Spent the day with my sister at the markets.`,
        },
      ])
    })
}

// created_on: new Date(Date.now())
