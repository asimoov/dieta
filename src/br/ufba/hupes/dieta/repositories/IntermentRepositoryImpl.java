package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Interment;

@Component
public class IntermentRepositoryImpl
    extends Repository<Interment, Long>
    implements IntermentRepository {

	IntermentRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}

}
