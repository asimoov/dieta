package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;
import br.ufba.hupes.dieta.models.Diet;
import br.ufba.hupes.dieta.models.Meal;
import br.ufba.hupes.dieta.models.Variation;
import br.ufba.hupes.dieta.repositories.DietRepository;
import br.ufba.hupes.dieta.repositories.FoodRepository;
import br.ufba.hupes.dieta.repositories.PatientRepository;

@Resource
public class DietController {

	private final Result result;
	private final DietRepository repository;
	private final PatientRepository patientRepository;
	private final FoodRepository foodRepository;
	
	private final Validator validator;

	public DietController(Result result, DietRepository repository,
			PatientRepository patientRepository, FoodRepository foodRepository, Validator validator) {
		this.result = result;
		this.repository = repository;
		this.patientRepository = patientRepository;
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