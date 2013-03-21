package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Diet;

@Component
public class DietRepositoryImpl
    extends Repository<Diet, Long>
    implements DietRepository {

	DietRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
