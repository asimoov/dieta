package br.ufba.hupes.dieta.repositories;

import br.ufba.hupes.dieta.models.Patient;

import java.util.List;

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
