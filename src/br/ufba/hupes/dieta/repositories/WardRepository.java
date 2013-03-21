package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Ward;

public interface WardRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Ward entity);
	
	Ward update(Ward entity);
	
	void destroy(Ward entity);
	
	Ward find(String id);
	
	List<Ward> findAll();

}
