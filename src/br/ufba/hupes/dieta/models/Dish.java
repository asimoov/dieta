package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Dish extends Entity {

	private Integer period;

	@ManyToOne
	private Nature nature;

	@ManyToOne
	private Menu menu;

	@OneToMany(mappedBy = "dish")
	private List<Meal> meals;

	public void setPeriod(Integer period) {
		this.period = period;
	}

	public Integer getPeriod() {
		return period;
	}

	public void setNature(Nature nature) {
		this.nature = nature;
	}

	public Nature getNature() {
		return nature;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

	public Menu getMenu() {
		return menu;
	}

	public List<Meal> getMeals() {
		return meals;
	}

	public void setMeals(List<Meal> meals) {
		this.meals = meals;
	}
}
