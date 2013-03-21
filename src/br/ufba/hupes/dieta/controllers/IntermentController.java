package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;
import br.ufba.hupes.dieta.models.Interment;
import br.ufba.hupes.dieta.repositories.IntermentRepository;
import br.ufba.hupes.dieta.repositories.PatientRepository;
import br.ufba.hupes.dieta.repositories.WardRepository;

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
	public List<Interment> index() {
		return repository.findAll();
	}
	
	@Post("/interments")
	public void create(Interment interment) {
		validator.validate(interment);
		validator.onErrorUsePageOf(this).newInterment();
		repository.create(interment);
		result.redirectTo(this).index();
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
		result.redirectTo(this).index();
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
		result.redirectTo(this).index();  
	}
}