package br.ufba.hupes.dieta.repositories;

import javax.persistence.EntityManager;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Menu;

@Component
public class MenuRepositoryImpl
    extends Repository<Menu, Long>
    implements MenuRepository {

	MenuRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
}
