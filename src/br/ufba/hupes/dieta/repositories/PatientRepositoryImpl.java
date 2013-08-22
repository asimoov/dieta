package br.ufba.hupes.dieta.repositories;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Patient;

import javax.persistence.EntityManager;

@Component
public class PatientRepositoryImpl
    extends Repository<Patient, Long>
    implements PatientRepository {

	PatientRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
