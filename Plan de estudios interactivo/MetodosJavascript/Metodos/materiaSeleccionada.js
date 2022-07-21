const d = document;

export default function seleccionarMateria(){
    const materias = d.querySelectorAll(".colormateria");
    d.addEventListener("mouseover", e => {
        if (e.target.matches(".item")){
            if (e.target.id !== "requisitos"){
                console.log(listadoMaterias)
                e.target.classList.add("celeste");
            }
        }
    })
    d.addEventListener("mouseout", e =>{
        if (e.target.matches(".item")){
            if (e.target.id !== "requisitos"){
                e.target.classList.remove("celeste")
            }
        }
    })
}
function pintarMateria(id){
}



/*Aqui creo todas las materias DEl Primer Cuatrimestre del Primer Año con sus correlativas y sus requisitos para luego poder pintarlas*/
let prog1= {
    id: "PROG1",
    correlativas: ["PROG2","CDLC2","AYDA1","IAS","AYDA2","CDD1"],
    conCursada: "",
    conFinal: ""
}
let am1= {
    id: "AM1",
    correlativas: ["FG","AM2","EYM","PYE","EAD","AC1"],
    conCursada: "",
    conFinal: ""
}
let algebra1= {
    id: "ALGEBRA1",
    correlativas: ["AL","MD","AYDA1","CDLC2","AYDA2","PYE","POO","EAD","MDS"],
    conCursada: "",
    conFinal: ""
}
let quimica= {
    id: "QUIMICA",
    correlativas: [""],
    conCursada: "",
    conFinal: ""
}
let listadoMaterias = [prog1,am1,algebra1,quimica];