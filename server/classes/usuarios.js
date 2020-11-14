class Usuarios {
	
	constructor() {
		this.personas = [];
	}

	get getPersonas() {

		return this.personas;
	}

	getPersona(id) {

		return this.personas.find(persona => persona.id === id);
	}

	getPersonasPorSala(sala) {
		
		const personEnSala = this.personas.filter(persona => persona.sala === sala);

		return personEnSala;
	}

	agregarPersona(id, nombre, sala) {
		
		const persona = { id, nombre, sala };
		this.personas.push(persona);

		return this.personas;
	}

	borrarPersona(id) {
		
		const personaBorrada = this.getPersona(id);

		this.personas = this.personas.filter(persona => persona.id !== id);

		return personaBorrada;
	}	
}

module.exports = {
	Usuarios,
}