package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.ufba.hupes.dieta.models.Dish;
import br.ufba.hupes.dieta.repositories.DishRepository;
import br.ufba.hupes.dieta.repositories.NatureRepository;		
import br.ufba.hupes.dieta.repositories.MenuRepository;		
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;

@Resource
public class DishController {

	private final Result result;
	private final DishRepository repository;
	private final NatureRepository natureRepository;		
	private final MenuRepository menuRepository;		
	
	private final Validator validator;
	
	public DishController(Result result, DishRepository repository, 
	NatureRepository natureRepository,	MenuRepository menuRepository,	Validator validator) {
		this.result = result;
		this.repository = repository;
		this.natureRepository = natureRepository;		
		this.menuRepository = menuRepository;	
		this.validator = validator;
	}
	
	@Get("/dishes")
	public List<Dish> index() {
		return repository.findAll();
	}
	
	@Post("/dishes")
	public void create(Dish dish) {
		validator.validate(dish);
		validator.onErrorUsePageOf(this).newDish();
		repository.create(dish);
		result.redirectTo(this).index();
	}
	
	@Get("/dishes/new")
	public Dish newDish() {
		result.include("natureList", natureRepository.findAll());		
		result.include("menuList", menuRepository.findAll());		
		return new Dish();
	}
	
	@Put("/dishes")
	public void update(Dish dish) {
		validator.validate(dish);
		validator.onErrorUsePageOf(this).edit(dish);
		repository.update(dish);
		result.redirectTo(this).index();
	}
	
	@Get("/dishes/{dish.id}/edit")
	public Dish edit(Dish dish) {
		result.include("natureList", natureRepository.findAll());		
		result.include("menuList", menuRepository.findAll());		
		
		return repository.find(dish.getId());
	}

	@Get("/dishes/{dish.id}")
	public Dish show(Dish dish) {
		return repository.find(dish.getId());
	}

	@Delete("/dishes/{dish.id}")
	public void destroy(Dish dish) {
		repository.destroy(repository.find(dish.getId()));
		result.redirectTo(this).index();  
	}
}