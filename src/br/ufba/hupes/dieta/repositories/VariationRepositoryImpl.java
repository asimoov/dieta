package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Variation;

@Component
public class VariationRepositoryImpl
    extends Repository<Variation, Long>
    implements VariationRepository {

	VariationRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
