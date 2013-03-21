package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Patient;

@Component
public class PatientRepositoryImpl
    extends Repository<Patient, Long>
    implements PatientRepository {

	PatientRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
