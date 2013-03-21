package br.ufba.hupes.dieta.models;

import javax.persistence.ManyToOne;

@javax.persistence.Entity
public class Variation extends Entity {

	@ManyToOne(optional = false)
	private Food food;
	
	@ManyToOne(optional = false)
	private Meal meal;

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
