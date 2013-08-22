package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Nature;
import br.ufba.hupes.dieta.repositories.NatureRepository;

import java.util.List;

@Resource
public class NatureController {

	private final Result result;
	private final NatureRepository repository;
	
	private final Validator validator;
	
	public NatureController(Result result, NatureRepository repository, 
	Validator validator) {
		this.result = result;
		this.repository = repository;
	
		this.validator = validator;
	}
	
	@Get("/natures")
	public List<Nature> index() {
		return repository.findAll();
	}
	
	@Post("/natures")
	public void create(Nature nature) {
		validator.validate(nature);
		validator.onErrorUsePageOf(this).newNature();
		repository.create(nature);
		result.redirectTo(this).index();
	}
	
	@Get("/natures/new")
	public Nature newNature() {
		return new Nature();
	}
	
	@Put("/natures")
	public void update(Nature nature) {
		validator.validate(nature);
		validator.onErrorUsePageOf(this).edit(nature);
		repository.update(nature);
		result.redirectTo(this).index();
	}
	
	@Get("/natures/{nature.id}/edit")
	public Nature edit(Nature nature) {
		
		return repository.find(nature.getId());
	}

	@Get("/natures/{nature.id}")
	public Nature show(Nature nature) {
		return repository.find(nature.getId());
	}

	@Delete("/natures/{nature.id}")
	public void destroy(Nature nature) {
		repository.destroy(repository.find(nature.getId()));
		result.redirectTo(this).index();  
	}
}