package br.ufba.hupes.dieta.repositories;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Diet;

import javax.persistence.EntityManager;

@Component
public class DietRepositoryImpl
    extends Repository<Diet, Long>
    implements DietRepository {

	DietRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
