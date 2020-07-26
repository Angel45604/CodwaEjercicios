let ELEMENT_DATA = [
    {hour: '8:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '10:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '11:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '13:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '14:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '16:00',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''},
    {hour: '17:30',monday: '', tuesday: '', wednesday: '', thursday: '', friday: ''}
  ]


// ELEMENT_DATA = [
//     {hour: '8:30',monday: {course: 'javascript 1'}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'javascript 1'}},
//     {hour: '10:00',monday: {course: 'programacion Basica 1'}, tuesday: '', wednesday: '', thursday: '', friday: {course: 'programacion Basica 1'}},
//     {hour: '11:30',monday: {course: 'python 1'}, tuesday: {course: 'javascript 3'}, wednesday: '', thursday: {course: 'javascript 3'}},
//     {hour: '13:00',monday: {course: 'javascript 2', members: ['Elide', 'Elisa', 'Evelyn', 'Uriel', 'Sofia']}, tuesday: '', wednesday: {course: 'programacion Basica 2'}, thursday: {course: 'programacion Basica 2'}, friday: ''},
//     {hour: '14:30',monday: '', tuesday: '', wednesday: {course: 'herramientas Computacionales'}, thursday: {course: 'javascript 2'}, friday: {course: 'algoritmos 1'}},
//     {hour: '16:00',monday: '', tuesday: '', wednesday: {course: 'algoritmos 1'}, thursday: '', friday: ''}
//   ];


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

    // (ELEMENT_DATA)= 
    // let courses =
    //for(let course of courses){
        // console.log(course)        
    // } 
    courses.forEach(course => {
        ELEMENT_DATA.forEach(e => {
             if(e['hour'] == course.hour) {
                if (course.active) 
                    e[course.day] = {course: course.course}
             }
         })

    })
    console.log(ELEMENT_DATA)
  
    
// course.day
// course['day']

//for(let i = 0; i < chavos.length; i++) {
  // console.log(chavos[i])
// }

//for(let chavo of chavos) {
 //   console.log(chavo)
// }

// let a = [1,2,3,4,5,6]

// let b = a.map(e => {
//    return e * e 
// })
// console.log(b)