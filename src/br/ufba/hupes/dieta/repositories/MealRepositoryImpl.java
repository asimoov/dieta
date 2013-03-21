package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Meal;

@Component
public class MealRepositoryImpl
    extends Repository<Meal, Long>
    implements MealRepository {

	MealRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
