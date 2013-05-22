package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import javax.persistence.Version;

@javax.persistence.Entity
public class Nature extends Entity {

	private String description;
	
	private Integer type;

	@OneToMany(mappedBy = "nature", cascade = CascadeType.REMOVE)
	private List<Meal> meals;
	
	@Version
	private Long version;
	
	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public List<Meal> getMeals() {
		return meals;
	}

	public void setMeals(List<Meal> meals) {
		this.meals = meals;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

}
