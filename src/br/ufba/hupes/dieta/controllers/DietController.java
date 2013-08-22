package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.*;
import br.ufba.hupes.dieta.models.Diet;
import br.ufba.hupes.dieta.models.Meal;
import br.ufba.hupes.dieta.models.Variation;
import br.ufba.hupes.dieta.repositories.DietRepository;
import br.ufba.hupes.dieta.repositories.FoodRepository;
import br.ufba.hupes.dieta.repositories.NatureRepository;
import br.ufba.hupes.dieta.repositories.PatientRepository;

import java.util.List;

@Resource
public class DietController {

	private final Result result;
	private final DietRepository repository;
	private final PatientRepository patientRepository;
	private final NatureRepository natureRepository;
	private final FoodRepository foodRepository;
	
	private final Validator validator;

	public DietController(Result result, DietRepository repository,
			PatientRepository patientRepository, NatureRepository natureRepository, FoodRepository foodRepository, Validator validator) {
		this.result = result;
		this.repository = repository;
		this.patientRepository = patientRepository;
		this.natureRepository = natureRepository;
		this.foodRepository = foodRepository;
		this.validator = validator;
	}

	@Get("/diets")
	public List<Diet> index() {
		return repository.findAll();
	}

	@Post("/diets")
	public void create(Diet diet) {
		if (diet.getMeals() != null) {
			for (Meal meal : diet.getMeals()) {
				meal.setDiet(diet);
				if(meal.getNature() != null) {
					meal.setNature(natureRepository.find(meal.getNature().getId()));
				}
				
				if (meal.getVariations() != null) {
					for (Variation variation : meal.getVariations()) {
						variation.setMeal(meal);
						variation.setFood(foodRepository.find(variation.getFood().getId()));
					}
				}
			}
		}

		validator.validate(diet);
		validator.onErrorUsePageOf(this).newDiet();
		repository.create(diet);
		result.redirectTo(this).index();
	}

	@Get("/diets/new")
	public Diet newDiet() {
		result.include("patientList", patientRepository.findAll());
		return new Diet();
	}

	@Put("/diets")
	public void update(Diet diet) {
		validator.validate(diet);
		validator.onErrorUsePageOf(this).edit(diet);
		repository.update(diet);
		result.redirectTo(this).index();
	}

	@Get("/diets/{diet.id}/edit")
	public Diet edit(Diet diet) {
		result.include("patientList", patientRepository.findAll());

		return repository.find(diet.getId());
	}

	@Get("/diets/{diet.id}")
	public Diet show(Diet diet) {
		return repository.find(diet.getId());
	}

	@Delete("/diets/{diet.id}")
	public void destroy(Diet diet) {
		repository.destroy(repository.find(diet.getId()));
		result.redirectTo(this).index();
	}
}