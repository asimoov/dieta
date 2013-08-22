package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Ward;
import br.ufba.hupes.dieta.repositories.WardRepository;

import java.util.List;

@Resource
public class WardController {

	private final Result result;
	private final WardRepository repository;
	
	private final Validator validator;
	
	public WardController(Result result, WardRepository repository, 
	Validator validator) {
		this.result = result;
		this.repository = repository;
	
		this.validator = validator;
	}
	
	@Get("/wards")
	public List<Ward> index() {
		return repository.findAll();
	}
	
	@Post("/wards")
	public void create(Ward ward) {
		validator.validate(ward);
		validator.onErrorUsePageOf(this).newWard();
		repository.create(ward);
		result.redirectTo(this).index();
	}
	
	@Get("/wards/new")
	public Ward newWard() {
		return new Ward();
	}
	
	@Put("/wards")
	public void update(Ward ward) {
		validator.validate(ward);
		validator.onErrorUsePageOf(this).edit(ward);
		repository.update(ward);
		result.redirectTo(this).index();
	}
	
	@Get("/wards/{ward.id}/edit")
	public Ward edit(Ward ward) {
		
		return repository.find(ward.getId());
	}

	@Get("/wards/{ward.id}")
	public Ward show(Ward ward) {
		return repository.find(ward.getId());
	}

	@Delete("/wards/{ward.id}")
	public void destroy(Ward ward) {
		repository.destroy(repository.find(ward.getId()));
		result.redirectTo(this).index();  
	}
}