package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Food;

public interface FoodRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Food entity);
	
	Food update(Food entity);
	
	void destroy(Food entity);
	
	Food find(Long id);
	
	List<Food> findAll();

}
