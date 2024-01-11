let students = [ 
    { Name: 'João',
      ProofOne: 9,
      ProofTwo: 10,
    },
    
    { Name: 'Maria',
      ProofOne: 3,
      ProofTwo: 5,
    },
    
    { Name: 'Fernanda',
      ProofOne: 2,
      ProofTwo: 9,
    }
      
]

let studentName = []
let studentProofOne = []
let stundtProofTwe = []


function printAverage(student) {
   return ((student.ProofOne + student.ProofTwo) / 2)  
}

for (let student of students) {
  if (printAverage(student) > 7 ) {
  alert(`${student.Name} você tirou ${student.ProofOne} na primeira prova e ${student.ProofTwo} na segunda e sua media foi de ${printAverage(student)}.

Parabens, voce passou!`)
}

else {
  alert(`${student.Name} você tirou ${student.ProofOne} na primeira prova e ${student.ProofTwo} na segunda e sua media foi de ${printAverage(student)}.

Estude mais, voce reprovou!`)
}
}