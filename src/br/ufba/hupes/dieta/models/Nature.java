package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Nature extends Entity {

	private String description;
	
	private Integer type;

	@OneToMany(mappedBy = "nature", cascade = CascadeType.REMOVE)
	private List<Dish> dishs;
	
	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public List<Dish> getDishs() {
		return dishs;
	}

	public void setDishs(List<Dish> dishs) {
		this.dishs = dishs;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

}
