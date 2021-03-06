package br.ufba.hupes.dieta.repositories;

import br.ufba.hupes.dieta.models.Variation;

import java.util.List;

public interface VariationRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Variation entity);
	
	Variation update(Variation entity);
	
	void destroy(Variation entity);
	
	Variation find(Long id);
	
	List<Variation> findAll();

}
