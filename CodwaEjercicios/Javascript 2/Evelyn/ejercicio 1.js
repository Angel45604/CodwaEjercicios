//Terminal 2
let ELEMENT_DATA = [
    {hour: '8:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '10:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '11:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '13:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '14:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '16:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '17:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''}
]

//ELEMENT_DATA = [
//    {hour: '8:30',monday: {course: 'javascript 1'}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'javascript 1'}},
//    {hour: '10:00',monday: {course: 'programacion Basica 1'}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'programacion Basica 1'}},
//    {hour: '11:30',monday: {course: 'python 1'}, tuesday: {course: 'javascript 3'}, wednesday: '', thursday: {course: 'javascript 3'}},
//    {hour: '13:00',monday: {course: 'javascript 2', members: ['Elide', 'Elisa', 'Evelyn', 'Sofia', 'Uriel']}, tuesday: '', wednesday: {course: 'programacion Basica 2'}, thursday: {course: 'programacion Basica 2'}, friday: ''},
//    {hour: '14:30',monday: '', tuesday: '', wednesday: {course: 'herramientas Computacionales'}, thursday: {course: 'javascript 2'}, friday: {course: 'algoritmos 1'}},
//    {hour: '16:00',monday: '', tuesday: '', wednesday: {course: 'algoritmos 1'}, thursday: '', friday: ''}
//  ];


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
          day: 'friday',
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

    ELEMENT_DATA.forEach(function(e){
      e.monday={}
      e.tuesday = {}
      e.wednesday = {}
      e.thursday = {}
      e.friday = {}
      courses.forEach(function(ee){
        chavos.forEach(function(c) {
          if(e.hour === ee.hour && ee.day === "monday"){
            if(c.courses.includes(ee.course)) {
          
              e.monday.members = e.monday.members || []
              e.monday.members.push(c.nombre)
            }
            e.monday.course =  ee.course
          }
          if(e.hour === ee.hour && ee.day === "tuesday"){
            if(c.courses.includes(ee.course)) {
              e.tuesday.members = e.tuesday.members || []
              e.tuesday.members.push(c.nombre)
            }
            e.tuesday.course =  ee.course
          }
          if(e.hour === ee.hour && ee.day === "wednesday"){
            if(c.courses.includes(ee.course)) {
              e.wednesday.members = e.wednesday.members || []
              e.wednesday.members.push(c.nombre)
            }
            e.wednesday.course =  ee.course
          }
          if(e.hour === ee.hour && ee.day === "thursday"){
            if(c.courses.includes(ee.course)) {
              
              e.thursday.members = e.thursday.members || []
              e.thursday.members.push(c.nombre)
            }
            e.thursday.course =  ee.course
          }
          if(e.hour === ee.hour && ee.day === "friday"){
            if(c.courses.includes(ee.course)) {
              
              e.friday.members = e.friday.members || []
              e.friday.members.push(c.nombre)
            }
            e.friday.course =  ee.course
          }
        }) 
      })
    })
  console.log(ELEMENT_DATA)
  