function Osoba(imie, nazwisko){
   this.name = imie;
   this.surname = nazwisko;
   this.sayHello = function(){
       console.log("Witaj " + this.name + " " + this.surname)
   }
};



var person1 = new Osoba("Arek", "Knopik");
var person2 = new Osoba("Jan", "Kowalski");