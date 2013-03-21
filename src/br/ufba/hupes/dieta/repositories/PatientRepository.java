package br.ufba.hupes.dieta.repositories;

import java.util.List;

import br.ufba.hupes.dieta.models.Patient;

public interface PatientRepository {
	/*
	 * Delete the methods you don't want to expose
	 */
	 
	void create(Patient entity);
	
	Patient update(Patient entity);
	
	void destroy(Patient entity);
	
	Patient find(Long id);
	
	List<Patient> findAll();

}
