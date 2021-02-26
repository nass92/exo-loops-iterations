console.log('First methode => "while"')
let tab = []
let i = 101

while (i >= 1) {
  console.log(i)
  i -= 2
}
console.log("")
console.log('Second methode => "do-while"')
let tab2 = []
let j = 101

do {
  console.log(j)
  j -= 2
} while (j >= 1)

console.log("")
console.log('Third methode => "for"')

for (let k = 101; k >= 1; k -= 2) {
  console.log(k)
}