package br.ufba.hupes.dieta.repositories;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import br.com.caelum.vraptor.ioc.Component;
import br.ufba.hupes.dieta.models.Interment;

@Component
public class IntermentRepositoryImpl
    extends Repository<Interment, Long>
    implements IntermentRepository {

	IntermentRepositoryImpl(EntityManager entityManager) {
		super(entityManager);
	}

	public List<Interment> findByQuery(String q) {
		Query query = entityManager.createQuery("select i from Interment i join i.patient p where INSTR(p.name, UPPER(:name)) > 0");
		query.setParameter("name", q);
		
		@SuppressWarnings("unchecked")
		List<Interment> resultList = query.getResultList();

		return resultList;
	}
}
