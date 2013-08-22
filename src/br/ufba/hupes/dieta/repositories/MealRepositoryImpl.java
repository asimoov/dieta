package br.ufba.hupes.dieta.repositories;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Meal;

import javax.persistence.EntityManager;

@Component
public class MealRepositoryImpl
    extends Repository<Meal, Long>
    implements MealRepository {

	MealRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
