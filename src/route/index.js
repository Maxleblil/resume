// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Maxim',
    lastname: 'Shein',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kharkiv',
}

var footer = {
  social: {
    email: {
      text: 'Shein@mail.com',
      href: 'mailto:dmytro@mail.com',
    },

    phone: {
      text: '+380959235223',
      href: 'tel:+380959235223',
    },

    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
				experience in development. Whenever I start to
				work on a new project I learn the domain and try
				to understand the idea of the project. Good team
				player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
				different platforms ( odds ) and sport statistics
				( tournament position, goals etc), analyzing by
				simple mathematics models and preparing
				probability for such events like: money line -
				first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 6,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 10,
          isTop: true,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'Git & Terminal',
          point: 6,
          isTop: false,
        },
        {
          name: 'Terminal',
          point: 5,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Cycling',
          isMain: true,
        },
        {
          name: 'Cooking',
          isMain: true,
        },
        {
          name: 'Basketball',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      education: [
        {
          name: 'IT Brains',
          isEnd: false,
        },
        {
          name: 'HPLM',
          isEnd: true,
        },
        {
          name: '1111',
          isEnd: true,
        },
        {
          name: '2222',
          isEnd: true,
        },
        {
          name: '3333',
          isEnd: true,
        },
      ],

      certificates: [
        {
          name: 'Certificates',
          id: 11111,
        },
        {
          name: 'Certificates',
          id: 22222,
        },
        {
          name: 'Certificates',
          id: 33333,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstuck Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '20.02.2023',
            to: null,
          },

          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://resume.com.ua/',
              about: 'You can review my resume on it.',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],
              stackAmount: 3,
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are real persons',
                },
                {
                  name: 'Preparing SEO optimized pages, The automated process of getting data for the app from documents',
                },
              ],
              awardAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/task21', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('task21', {
    layout: 'basic',
    heading: {
      main: {
        title: 'JavaScript',
        text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      second: {
        title: 'Stack Overflow',
        text: 'First-class functions',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
      subblock: {
        title: 'JavaScript Weekly',
        text: 'Prototype-based inheritance newsletter',
        button_text: {
          solid: 'Open page',
          outline: 'Add to cart',
        },
      },
    },
    nested_display: {
      title: 'HTML',
      children_display: {
        title: 'Outdated HTML tags',
        text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
        button: {
          text: 'Орen',
        },
      },
      header_text: 'Sections',
      button: {
        text: 'Learn more',
      },
    },
    paragraph: {
      title: 'About modules',
      text: 'Modules with import/export statements',

      button: {
        text: 'Open link page',
        url: 'https://google.com',
      },
      list_name: [
        {
          text: 'Github',
          url: 'https://github.com/',
        },
        {
          text: 'Bootstrap',
          url: 'https://getbootstrap.com/',
        },
      ],
    },
  })
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
