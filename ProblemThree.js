const people =[
    
       
            {
                name:'Tanisha',
                age:29,
                temperature:37
            },
            {
                name:'Tania',
                age:22,
                temperature:99
            },
            {
                name:'Hasan',
                age:21,
                temperature:88
            },
            {
                name:'Samia',
                age:35,
                temperature:98
            },

            {
                name:'Jennifer',
                age:60,
                temperature:37
            },
            {
                name:'Mustafa',
                age:51,
                temperature:99
            },
            {
                name:'Nasir',
                age:45,
                temperature:88
            },
       
]

const result = vaxTrail(people)
console.log(result)

function vaxTrail (people) {
   const [A]= people.filter(peep => (peep.age>=20 && peep.age<30))
   const [B]= people.filter(peep => (peep.age>=31 && peep.age<40))
   const [C]= people.filter(peep => (peep.age>=41 && peep.age<50))
   const [D]= people.filter(peep => peep.age>40)
   people = {A,B,C,D};
    return people;
}
