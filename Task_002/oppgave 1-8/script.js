//oppgave 1
let by = prompt("Hvilken by er du født i?")
let svar = confirm("Er du sikker på at dette er riktig?")
if (svar) {
    document.write("Du er født i " + by)
}
else {
    document.write("Du har valgt å ikke bekrefte dette")
}
document.write("<br>")

//oppgave 2 
document.write("<br>")
let navn = prompt("Skriv et navn")
for( let i = 0; i < 11; i++ ) {
    document.write( ' ' + navn + ' ' + i )
}

//oppgave 3
document.write("<br>")
document.write("<br>")
document.write('Svar av 15 % 2: ' + 15 % 2 + "<br>")
document.write('Svar av 15 % 3: ' + 15 % 3 + "<br>")
document.write('Svar av 10 % 3: ' + 10 % 3 + "<br>")
document.write('Svar av 12 % 3: ' + 12 % 3 + "<br>")
document.write('Svar av 16 % 2: ' + 16 % 2 + "<br>")

//oppgave 4
document.write("<br>")
let age = prompt("Hvor gammel er du?")

if(age <= 16){
    document.write(
        "Du er gammel nok til å være i tilstede"
    )
}
else{
    document.write(
        "Du er for ung til å komme in på tilstede"
    )
}

//oppgave 5
document.write("<br>")
document.write("<br>")
let sum = 0
for(let i = 1; i < 101; i++){
    sum = sum + i
}
document.write(sum )

//oppgave 6
document.write("<br>")
document.write("<br>")
let sum2 = 0
for(let i = 1; i < 101; i++){
    if(i % 2 == 1){
        sum2 = sum2 + i
    }
}
document.write(sum2)

//oppgave 7
document.write("<br>")
document.write("<br>")
let sum3 = 0
for(let i = 1; i < 101; i++){
    if(i % 3 == 0){
        sum3 = sum3 + i
    }
}
document.write(sum3 )

//oppgave 8
document.write("<br>")
document.write("<br>")
let sum4 = 0
let svar2 = prompt("Hvilket tall ønsker du å summere til?")
for(let i = 1; i < svar2; i++){
    sum4 = sum4 + i
}
document.write(sum4 )