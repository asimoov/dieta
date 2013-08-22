package br.ufba.hupes.dieta.repositories;

import br.ufba.hupes.dieta.models.Nature;

import java.util.List;

public interface NatureRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Nature entity);
	
	Nature update(Nature entity);
	
	void destroy(Nature entity);
	
	Nature find(Long id);
	
	List<Nature> findAll();

}
