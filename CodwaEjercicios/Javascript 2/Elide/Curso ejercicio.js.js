//Terminal 1
let ELEMENT_DATA = [
    {hour: '8:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '10:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '11:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '13:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '14:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '16:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '17:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''}
  ]
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

// ELEMENT_DATA =
// let courses =
    // for (let courses of courses){
    //   //  console.log(course)
    // }
    courses.forEach(course => {
       ELEMENT_DATA.forEach(a => {
           if(a['hour'] == course.hour) {
               if (course.active)
                   a[course.day] = {course: course.course}
           }   
       })
   })

    // console.log (ELEMENT_DATA)

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

    // for (let chavo of chavos){
    //     console.log(chavo)
    // }
    let members = []
    chavos.forEach(chavo => {
        chavo.courses.forEach(curso => {
          ELEMENT_DATA.forEach(a => {
            // a = {
            //   hour: '16:00',
            //   monday: { course: 'Javascript 3' },
            //   tuesday: { course: 'Programacion Basica 1', members: [, , ,] },
            //   wednesday: { course: 'Javascript 3' },
            //   thursday: '',
            //   friday: { course: 'Programacion Basica 1' }
            // }
          if(a.monday.course == curso) {
            a.monday.members = a.monday.members || []
            if(!a.monday.members.includes(chavo.nombre))
              a.monday.members.push(chavo.nombre) 
          }
          if(a.tuesday.course == curso) {
            a.tuesday.members = a.tuesday.members || []
            if(!a.tuesday.members.includes(chavo.nombre))
              a.tuesday.members.push(chavo.nombre)  
          }
          if(a.wednesday.course == curso) {
            a.wednesday.members = a.wednesday.members || []
            if(!a.wednesday.members.includes(chavo.nombre))
              a.wednesday.members.push(chavo.nombre)  
          }
          if(a.thursday.course == curso) {
            a.thursday.members = a.thursday.members || []
            if(!a.thursday.members.includes(chavo.nombre))
              a.thursday.members.push(chavo.nombre) 
          }
          if(a.friday.course == curso) {
            a.friday.members = a.friday.members || []
            if(!a.friday.members.includes(chavo.nombre))
              a.friday.members.push(chavo.nombre)  

          }       
        })
    })
  })
   console.log (ELEMENT_DATA)
   
