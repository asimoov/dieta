package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Variation;
import br.ufba.hupes.dieta.repositories.FoodRepository;
import br.ufba.hupes.dieta.repositories.MealRepository;
import br.ufba.hupes.dieta.repositories.VariationRepository;

import java.util.List;

@Resource
public class VariationController {

	private final Result result;
	private final VariationRepository repository;
	private final FoodRepository foodRepository;		
	private final MealRepository mealRepository;
	
	private final Validator validator;
	
	public VariationController(Result result, VariationRepository repository, 
	FoodRepository foodRepository,	MealRepository mealRepository,	Validator validator) {
		this.result = result;
		this.repository = repository;
		this.foodRepository = foodRepository;		
		this.mealRepository = mealRepository;	
		this.validator = validator;
	}
	
	@Get("/variations")
	public List<Variation> index() {
		return repository.findAll();
	}
	
	@Post("/variations")
	public void create(Variation variation) {
		validator.validate(variation);
		validator.onErrorUsePageOf(this).newVariation();
		repository.create(variation);
		result.redirectTo(this).index();
	}
	
	@Get("/variations/new")
	public Variation newVariation() {
		result.include("foodList", foodRepository.findAll());		
		result.include("mealList", mealRepository.findAll());		
		return new Variation();
	}
	
	@Put("/variations")
	public void update(Variation variation) {
		validator.validate(variation);
		validator.onErrorUsePageOf(this).edit(variation);
		repository.update(variation);
		result.redirectTo(this).index();
	}
	
	@Get("/variations/{variation.id}/edit")
	public Variation edit(Variation variation) {
		result.include("foodList", foodRepository.findAll());		
		result.include("mealList", mealRepository.findAll());		
		
		return repository.find(variation.getId());
	}

	@Get("/variations/{variation.id}")
	public Variation show(Variation variation) {
		return repository.find(variation.getId());
	}

	@Delete("/variations/{variation.id}")
	public void destroy(Variation variation) {
		repository.destroy(repository.find(variation.getId()));
		result.redirectTo(this).index();  
	}
}