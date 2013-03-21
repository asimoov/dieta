package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.ufba.hupes.dieta.models.Meal;
import br.ufba.hupes.dieta.repositories.MealRepository;
import br.ufba.hupes.dieta.repositories.DishRepository;		
import br.ufba.hupes.dieta.repositories.DietRepository;		
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;

@Resource
public class MealController {

	private final Result result;
	private final MealRepository repository;
	private final DishRepository dishRepository;		
	private final DietRepository dietRepository;		
	
	private final Validator validator;
	
	public MealController(Result result, MealRepository repository, 
	DishRepository dishRepository,	DietRepository dietRepository,	Validator validator) {
		this.result = result;
		this.repository = repository;
		this.dishRepository = dishRepository;		
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
		result.include("dishList", dishRepository.findAll());		
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
		result.include("dishList", dishRepository.findAll());		
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