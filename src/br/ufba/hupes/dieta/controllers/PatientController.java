package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Patient;
import br.ufba.hupes.dieta.repositories.PatientRepository;

import java.util.List;

@Resource
public class PatientController {

	private final Result result;
	private final PatientRepository repository;
	
	private final Validator validator;
	
	public PatientController(Result result, PatientRepository repository, 
	Validator validator) {
		this.result = result;
		this.repository = repository;
	
		this.validator = validator;
	}
	
	@Get("/patients")
	public List<Patient> index() {
		return repository.findAll();
	}
	
	@Post("/patients")
	public void create(Patient patient) {
		validator.validate(patient);
		validator.onErrorUsePageOf(this).newPatient();
		repository.create(patient);
		result.redirectTo(this).index();
	}
	
	@Get("/patients/new")
	public Patient newPatient() {
		return new Patient();
	}
	
	@Put("/patients")
	public void update(Patient patient) {
		validator.validate(patient);
		validator.onErrorUsePageOf(this).edit(patient);
		repository.update(patient);
		result.redirectTo(this).index();
	}
	
	@Get("/patients/{patient.id}/edit")
	public Patient edit(Patient patient) {
		
		return repository.find(patient.getId());
	}

	@Get("/patients/{patient.id}")
	public Patient show(Patient patient) {
		return repository.find(patient.getId());
	}

	@Delete("/patients/{patient.id}")
	public void destroy(Patient patient) {
		repository.destroy(repository.find(patient.getId()));
		result.redirectTo(this).index();  
	}
}