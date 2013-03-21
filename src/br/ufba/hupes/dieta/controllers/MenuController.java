package br.ufba.hupes.dieta.controllers;

import java.util.List;

import br.ufba.hupes.dieta.models.Menu;
import br.ufba.hupes.dieta.repositories.MenuRepository;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.Validator;

@Resource
public class MenuController {

	private final Result result;
	private final MenuRepository repository;
	
	private final Validator validator;
	
	public MenuController(Result result, MenuRepository repository, 
	Validator validator) {
		this.result = result;
		this.repository = repository;
	
		this.validator = validator;
	}
	
	@Get("/menus")
	public List<Menu> index() {
		return repository.findAll();
	}
	
	@Post("/menus")
	public void create(Menu menu) {
		validator.validate(menu);
		validator.onErrorUsePageOf(this).newMenu();
		repository.create(menu);
		result.redirectTo(this).index();
	}
	
	@Get("/menus/new")
	public Menu newMenu() {
		return new Menu();
	}
	
	@Put("/menus")
	public void update(Menu menu) {
		validator.validate(menu);
		validator.onErrorUsePageOf(this).edit(menu);
		repository.update(menu);
		result.redirectTo(this).index();
	}
	
	@Get("/menus/{menu.id}/edit")
	public Menu edit(Menu menu) {
		
		return repository.find(menu.getId());
	}

	@Get("/menus/{menu.id}")
	public Menu show(Menu menu) {
		return repository.find(menu.getId());
	}

	@Delete("/menus/{menu.id}")
	public void destroy(Menu menu) {
		repository.destroy(repository.find(menu.getId()));
		result.redirectTo(this).index();  
	}
}