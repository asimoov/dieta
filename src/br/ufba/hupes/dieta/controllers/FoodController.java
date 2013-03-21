package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.ufba.hupes.dieta.models.Food;
import br.ufba.hupes.dieta.repositories.FoodRepository;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;

@Resource
public class FoodController {

	private final Result result;
	private final FoodRepository repository;
	
	private final Validator validator;
	
	public FoodController(Result result, FoodRepository repository, 
	Validator validator) {
		this.result = result;
		this.repository = repository;
	
		this.validator = validator;
	}
	
	@Get("/foods")
	public List<Food> index() {
		return repository.findAll();
	}
	
	@Post("/foods")
	public void create(Food food) {
		validator.validate(food);
		validator.onErrorUsePageOf(this).newFood();
		repository.create(food);
		result.redirectTo(this).index();
	}
	
	@Get("/foods/new")
	public Food newFood() {
		return new Food();
	}
	
	@Put("/foods")
	public void update(Food food) {
		validator.validate(food);
		validator.onErrorUsePageOf(this).edit(food);
		repository.update(food);
		result.redirectTo(this).index();
	}
	
	@Get("/foods/{food.id}/edit")
	public Food edit(Food food) {
		
		return repository.find(food.getId());
	}

	@Get("/foods/{food.id}")
	public Food show(Food food) {
		return repository.find(food.getId());
	}

	@Delete("/foods/{food.id}")
	public void destroy(Food food) {
		repository.destroy(repository.find(food.getId()));
		result.redirectTo(this).index();  
	}
}