package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Dish;

public interface DishRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Dish entity);
	
	Dish update(Dish entity);
	
	void destroy(Dish entity);
	
	Dish find(Long id);
	
	List<Dish> findAll();

}
