package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Meal;
import br.ufba.hupes.dieta.repositories.DietRepository;
import br.ufba.hupes.dieta.repositories.MealRepository;
import br.ufba.hupes.dieta.repositories.NatureRepository;

import java.util.List;

@Resource
public class MealController {

	private final Result result;
	private final MealRepository repository;
	private final NatureRepository natureRepository;		
	private final DietRepository dietRepository;		
	
	private final Validator validator;
	
	public MealController(Result result, MealRepository repository, 
	NatureRepository natureRepository,	DietRepository dietRepository,	Validator validator) {
		this.result = result;
		this.repository = repository;
		this.natureRepository = natureRepository;		
		this.dietRepository = dietRepository;	
		this.validator = validator;
	}
	
	@Get("/meals")
	public List<Meal> index() {
		return repository.findAll();
	}
	
	@Post("/meals")
	public void create(Meal meal) {
		validator.validate(meal);
		validator.onErrorUsePageOf(this).newMeal();
		repository.create(meal);
		result.redirectTo(this).index();
	}
	
	@Get("/meals/new")
	public Meal newMeal() {
		result.include("natureList", natureRepository.findAll());		
		result.include("dietList", dietRepository.findAll());		
		return new Meal();
	}
	
	@Put("/meals")
	public void update(Meal meal) {
		validator.validate(meal);
		validator.onErrorUsePageOf(this).edit(meal);
		repository.update(meal);
		result.redirectTo(this).index();
	}
	
	@Get("/meals/{meal.id}/edit")
	public Meal edit(Meal meal) {
		result.include("natureList", natureRepository.findAll());		
		result.include("dietList", dietRepository.findAll());		
		
		return repository.find(meal.getId());
	}

	@Get("/meals/{meal.id}")
	public Meal show(Meal meal) {
		return repository.find(meal.getId());
	}

	@Delete("/meals/{meal.id}")
	public void destroy(Meal meal) {
		repository.destroy(repository.find(meal.getId()));
		result.redirectTo(this).index();  
	}
}