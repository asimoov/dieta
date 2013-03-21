package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Dish;

@Component
public class DishRepositoryImpl
    extends Repository<Dish, Long>
    implements DishRepository {

	DishRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
