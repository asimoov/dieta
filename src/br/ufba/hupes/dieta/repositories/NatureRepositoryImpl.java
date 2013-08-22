package br.ufba.hupes.dieta.repositories;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Nature;

import javax.persistence.EntityManager;

@Component
public class NatureRepositoryImpl
    extends Repository<Nature, Long>
    implements NatureRepository {

	NatureRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
