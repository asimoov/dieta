package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Diet;

public interface DietRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Diet entity);
	
	Diet update(Diet entity);
	
	void destroy(Diet entity);
	
	Diet find(Long id);
	
	List<Diet> findAll();

}
