package br.ufba.hupes.dieta.models;

import javax.persistence.*;
import java.util.List;

@javax.persistence.Entity
@SequenceGenerator(name = "SEQUENCE", sequenceName = "SEQ_MEAL") 
public class Meal extends Entity {

	@ManyToOne
	private Nature nature;

	@ManyToOne(optional = true)
	private Diet diet;

	private Integer status;

	private Integer period;
	
	@OneToMany(mappedBy = "meal", cascade = CascadeType.ALL)
	private List<Variation> variations;

	@Version
	private Long version;

	public Nature getNature() {
		return nature;
	}

	public void setNature(Nature nature) {
		this.nature = nature;
	}

	public void setDiet(Diet diet) {
		this.diet = diet;
	}

	public Diet getDiet() {
		return diet;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getStatus() {
		return status;
	}

	public Integer getPeriod() {
		return period;
	}

	public void setPeriod(Integer period) {
		this.period = period;
	}

	public List<Variation> getVariations() {
		return variations;
	}

	public void setVariations(List<Variation> variations) {
		this.variations = variations;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

}
