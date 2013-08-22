package br.ufba.hupes.dieta.repositories;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Variation;

import javax.persistence.EntityManager;

@Component
public class VariationRepositoryImpl
    extends Repository<Variation, Long>
    implements VariationRepository {

	VariationRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
