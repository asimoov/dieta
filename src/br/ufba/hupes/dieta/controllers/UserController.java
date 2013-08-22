package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.Result;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

@Resource
public class UserController {
	
	private Result result;

	public UserController(Result result) {
		this.result = result;
	}
	
	@Get("/user")
	public void index() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		//auth.getAuthorities()
	    //String name = auth.getName(); //get logged in username
	    
	    result.include("auth", auth);		
	}
}
