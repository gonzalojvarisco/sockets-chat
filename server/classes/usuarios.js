class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;

    }

    getPersona(id) {

        let persona = this.personas.filter(pers => pers.id === id)[0]; //filter va a verificar en el arreglo si hay una persona con el mismo id. El [0] se coloca para que solo devuelva un elemento

        return persona; //si no encuentra una persona va a devolver undefine o null
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        //....
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);

        this.personas = this.personas.filter(pers => {
            return pers.id != id;
        });

        return personaBorrada;

    }

}



module.exports = {
    Usuarios
}