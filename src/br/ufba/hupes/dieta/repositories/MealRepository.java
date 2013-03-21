package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Meal;

public interface MealRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Meal entity);
	
	Meal update(Meal entity);
	
	void destroy(Meal entity);
	
	Meal find(Long id);
	
	List<Meal> findAll();

}
