package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Nature;

@Component
public class NatureRepositoryImpl
    extends Repository<Nature, Long>
    implements NatureRepository {

	NatureRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
