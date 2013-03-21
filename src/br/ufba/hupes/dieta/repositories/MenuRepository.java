package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Menu;

public interface MenuRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Menu entity);
	
	Menu update(Menu entity);
	
	void destroy(Menu entity);
	
	Menu find(Long id);
	
	List<Menu> findAll();

}
