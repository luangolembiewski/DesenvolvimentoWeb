//Abstração = entender objeto seus atributos e metódos
class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(frase){
        console.log(this.nome + " disse "+frase)
    }
}

//Encapsulamento = pode ser armazenada em outro arquivo criptografado

//Herança
class Aluno extends Pessoa{
    estudar(disciplina){
        console.log(this.nome+" estuda: "+disciplina)
    }
}

var aluno1 = new Aluno("Luan");
aluno1.falar("Oi")
aluno1.estudar("matemática")

//Polimorfismo SOBRESCRITA
class Carro{
    constructor(tipo,estagioTurbo){
        this.turbo = new Turbo(estagioTurbo)
        if(tipo==1){
            this.nome="normal"
            this.velMax=50
        }
        else if(tipo==2){
            this.nome="esportivo"
            this.velMax=120
        }
        else if(tipo==3){
            this.nome="offRoad"
            this.velMax=150
        }
        this.velMax+=this.turbo.pot
    }
    info(){
        console.log(`Carro{ tipo:${this.nome} VelMax:${this.velMax} }`)
    }
}
class Turbo{
    constructor(e){
        if(e==0){
            this.pot=0
        }
        if(e==1){
            this.pot=50
        }
        else if(e==2){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.nome="Carro Especial"
        this.velMax=300+this.turbo.pot
    }
    info(){                         
        console.log(`Carro Polimorfismo:{ tipo:${this.nome} VelMax:${this.velMax} }`)
    }

}

const c1=new Carro(1,0)
const c2=new Carro(1,1)
const c3=new CarroEspecial(2)

c1.info()
c2.info()
c3.info()

class Calculadora{
    constructor(a,b){
       this.res = a+b;
    }
    info(){
       console.log(this.res);
    }
}
//Polimorfismo SOBRECARGA
const calc = new Calculadora(1,2)               //numeros
const calc2 = new Calculadora("res","posta")    //letras
calc.info()
calc2.info()