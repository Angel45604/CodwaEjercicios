//Terminal 4
let courses = [ 
    {
        course: 'Javascript 1',
        hour: '13:00',
        day: 'wednesday',
        active: true
    },
    {
        course: 'Javascript 1',
        hour: '13:00',
        day: 'saturday',
        active: true
    },
    { 
      course: 'Javascript 2',
      hour: '13:00',
      day: 'monday',
      active: true
    },
    {
      course: 'Javascript 2',
      hour: '13:00',
      day: 'thursday',
      active: true
    },
    {
      course: 'Programacion Basica 1',
      hour: '16:00',
      day: 'tuesday',
      active: true
    },
    {
      course: 'Programacion Basica 1',
      hour: '16:00',
      day: 'friday',
      active: true
    },
    {
      course: 'Javascript 3',
      hour: '16:00',
      day: 'monday',
      active: true
    },
    {
      course: 'Javascript 3',
      hour: '16:00',
      day: 'wednesday',
      active: true
    },
    {
      course: 'Programacion Basica 2',
      hour: '10:00',
      day: 'tuesday',
      active: true
    },
    {
      course: 'Programacion Basica 2',
      hour: '10:00',
      day: 'thursday',
      active: true
    },
    {
      course: 'Python 1',
      hour: '13:00',
      day: 'tuesday',
      active: true
    },
    {
      course: 'Python 1',
      hour: '13:00',
      day: 'thursday',
      active: true
    },
    {
      course: 'Python 1',
      hour: '11:30',
      day: 'tuesday',
      active: true
    },
    {
      course: 'Python 2',
      hour: '11:30',
      day: 'thursday',
      active: true
    },
    {
        course: 'Algoritmos 1',
        hour: '17:30',
        day: 'thursday',
        active: false
    },
    {
        course: 'Algoritmos 1',
        hour: '17:30',
        day: 'friday',
        active: false
    }
]

let chavos = [
    {
      nombre: 'Roy',
      courses: [
          'Javascript 3',
      ]
    },
    {
      nombre: 'Elide',
      courses: [
          'Javascript 2',
          'Programacion Basica 1',
          'Python 2'
      ]
    },
    {
      nombre: 'Augusto',
      courses: [
        'Programacion Basica 2',
        'Python 1'
      ]
    },
    {
      nombre: 'SuiWO',
      courses: [
        'Python 2'
      ]
    },
    {
      nombre: 'Elisa',
      courses: [
          'Javascript 2',
      ]
    },
    {
      nombre: 'Javier',
      courses: [
        'Programacion Basica 1',
        'Programacion Basica 2'
      ]
    },
    {
      nombre: 'Sofia',
      courses: [
          'Javascript 2',
          'Python 2'
      ]
    },
    {
      nombre: 'Evelyn',
      courses: [
          'Javascript 2',
      ]
    },
    {
      nombre: 'Saul',
      courses: [
        'Javascript 1',
        'Programacion Basica 2'
      ]
    },
    {
      nombre: 'YinWO',
      courses: [
        'Javascript 2',
        'Python 2',
        'Javascript 1'
      ]
    },
    {
      nombre: 'Yoltic',
      courses: [
        'Javascript 2',
        'Javascript 2'
      ]
    },
    {
      nombre: 'Jacqueline',
      courses: [
          'Programacion Basica 2',
          'Javascript 1'
      ]
    },
    {
      nombre: 'Said',
      courses: [
        'Python 2'
      ]
    }
]

let no = []

chavos.forEach(e => {
    no = e.nombre
    
  console.log(no)  
    
})

//estas 
// const pan = function(cantidad) {
//     return '🍞'.repeat(cantidad)
// }
//pan(5)
