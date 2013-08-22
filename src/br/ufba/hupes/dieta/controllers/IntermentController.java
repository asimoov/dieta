package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Interment;
import br.ufba.hupes.dieta.repositories.IntermentRepository;
import br.ufba.hupes.dieta.repositories.PatientRepository;
import br.ufba.hupes.dieta.repositories.WardRepository;

import java.util.List;

@Resource
public class IntermentController {

	private final Result result;
	private final IntermentRepository repository;
	private final PatientRepository patientRepository;		
	private final WardRepository wardRepository;		
	
	private final Validator validator;
	
	public IntermentController(Result result, IntermentRepository repository, 
	PatientRepository patientRepository,	WardRepository wardRepository,	Validator validator) {
		this.result = result;
		this.repository = repository;
		this.patientRepository = patientRepository;		
		this.wardRepository = wardRepository;	
		this.validator = validator;
	}
	
	@Get("/interments")
	public List<Interment> index(String q) {
		if (q != null) {
			return repository.findByQuery(q);
		}
		
		return repository.findAll();
		
	}
	
	@Post("/interments")
	public void create(Interment interment) {
		validator.validate(interment);
		validator.onErrorUsePageOf(this).newInterment();
		repository.create(interment);
		result.redirectTo(this).index(null);
	}
	
	@Get("/interments/new")
	public Interment newInterment() {
		result.include("patientList", patientRepository.findAll());		
		result.include("wardList", wardRepository.findAll());		
		return new Interment();
	}
	
	@Put("/interments")
	public void update(Interment interment) {
		validator.validate(interment);
		validator.onErrorUsePageOf(this).edit(interment);
		repository.update(interment);
		result.redirectTo(this).index(null);
	}
	
	@Get("/interments/{interment.id}/edit")
	public Interment edit(Interment interment) {
		result.include("patientList", patientRepository.findAll());		
		result.include("wardList", wardRepository.findAll());		
		
		return repository.find(interment.getId());
	}

	@Get("/interments/{interment.id}")
	public Interment show(Interment interment) {
		return repository.find(interment.getId());
	}

	@Delete("/interments/{interment.id}")
	public void destroy(Interment interment) {
		repository.destroy(repository.find(interment.getId()));
		result.redirectTo(this).index(null);  
	}
}