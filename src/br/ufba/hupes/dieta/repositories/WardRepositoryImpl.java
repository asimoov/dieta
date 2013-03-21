package br.ufba.hupes.dieta.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Ward;

@Component
public class WardRepositoryImpl
    extends Repository<Ward, String>
    implements WardRepository {

	WardRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}
	
	@Override
	public List<Ward> findAll() {
		Query query = entityManager.createQuery("from Ward w order by NLSSORT(w.description, 'NLS_SORT=BINARY_AI')");

		@SuppressWarnings("unchecked")
		List<Ward> resultList = query.getResultList();

		return resultList;
	}
}
