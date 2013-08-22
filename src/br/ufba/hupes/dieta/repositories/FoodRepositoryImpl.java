package br.ufba.hupes.dieta.repositories;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Food;

import javax.persistence.EntityManager;

@Component
public class FoodRepositoryImpl
    extends Repository<Food, Long>
    implements FoodRepository {

	FoodRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
