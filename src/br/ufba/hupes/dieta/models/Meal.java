package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Meal extends Entity {

	@ManyToOne(optional = false)
	private Dish dish;
	
	@ManyToOne(optional = false)
	private Diet diet;
	
	private Integer status;

	@OneToMany(mappedBy = "meal", cascade = CascadeType.REMOVE)
	private List<Variation> variations;
	
	public void setDish(Dish dish) {
		this.dish = dish;
	}

	public Dish getDish() {
		return dish;
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

	public List<Variation> getVariations() {
		return variations;
	}

	public void setVariations(List<Variation> variations) {
		this.variations = variations;
	}

}
