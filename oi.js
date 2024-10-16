let Aluno = [ 'Artur Araujo Souza Brasil',
              'Diego Dos Santos',
               'Eduardo Barbosa Santos',
               'Gabriel Januario',
               'Gean luca Sucati Dos Santos',
               'Giovana Hipolito Lopes',
               'Graziele Vitoria',
               'Guilherme Moreira Silva',
             'Guilherme Santos Oliveira',
               
            ]

console.log ( Aluno )
      
Aluno.push ('MATEUS ANTUNES BELO')
console.log ( Aluno )

Aluno.unshift('LAYO KAUE BEVENUTO DE LIMA')
console.log ( Aluno )

Aluno.shift(Aluno)
console.log ( Aluno )

Aluno.pop (Aluno)
console.log (Aluno)

Aluno.pop (Aluno)
Aluno.pop (Aluno)
Aluno.push('RAUL BONET')
Aluno.push('RENATO DE LIMA')
console.log(Aluno)

Aluno.push('José Henrique Milton Ganguini')
console.log(Aluno)

Aluno.unshift('kevin ribeiro de paula')
console.log(Aluno)


let vetor_filtrado = Aluno.filter(aluno=>!aluno.startsWith("G"));
console.log(vetor_filtrado)





