package br.ufba.hupes.dieta.models;

import javax.persistence.Column;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Version;

@javax.persistence.Entity
@SequenceGenerator(name = "SEQUENCE", sequenceName = "SEQ_VARIATION") 
public class Variation extends Entity {

	@Column(nullable = false)
	private Double quantity;
	
	@ManyToOne(optional = false)
	private Food food;
	
	@ManyToOne(optional = false)
	private Meal meal;

	@Version
	private Long version;
	
	public Double getQuantity() {
		return quantity;
	}

	public void setQuantity(Double quantity) {
		this.quantity = quantity;
	}

	public void setFood(Food food) {
		this.food = food;
	}

	public Food getFood() {
		return food;
	}

	public void setMeal(Meal meal) {
		this.meal = meal;
	}

	public Meal getMeal() {
		return meal;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}

}
