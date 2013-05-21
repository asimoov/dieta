package br.ufba.hupes.dieta.models;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@javax.persistence.Entity
public class Variation extends Entity {

	@Column(nullable = false)
	private Double quantity;
	
	@ManyToOne(optional = false)
	@JoinColumn(unique = true)
	private Food food;
	
	@ManyToOne(optional = false)
	@JoinColumn(unique = true)
	private Meal meal;

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

}
