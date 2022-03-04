// const question = [
//   'O que eu aprendi hoje ?',
//   'O que eu poderia melhorar ?',
//   'O que me deixou feliz ?',
//   'O que eu fiz de produtivo',
// ]

// const ask =  (index = 0 ) =>  {
//   process.stdout.write("\n" + question[index] + " >")
// }

// ask ()

// const answers = []
//   process.stdin.on("data", data => {
//     answers.push(data.toString().trim())
//     if (answers.length < question.length) {
//       ask(answers.length)
//     } else {
//       process.exit()
//     }
//   })

//   process.on('exit', () => {
//     console.log(`
//      Bacana Enzo!

//      O que eu aprendi hoje:
//      ${answers[0]}

//      O que eu poderia melhorar:
//      ${answers[1]}

//      O que me deixou feliz:
//      ${answers[2]}

//      O que eu fiz de produtivo:
//      ${answers[3]}

//      Aprende um pouco TODOS OS DIAS!!!
//      `)
//   })
