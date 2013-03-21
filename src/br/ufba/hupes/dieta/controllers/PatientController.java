package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.ufba.hupes.dieta.models.Patient;
import br.ufba.hupes.dieta.repositories.PatientRepository;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;

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