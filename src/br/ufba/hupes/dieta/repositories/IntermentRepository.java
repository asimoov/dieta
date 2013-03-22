package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Interment;

public interface IntermentRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Interment entity);
	
	Interment update(Interment entity);
	
	void destroy(Interment entity);
	
	Interment find(Long id);
	
	List<Interment> findAll();

	List<Interment> findByQuery(String q);
}
