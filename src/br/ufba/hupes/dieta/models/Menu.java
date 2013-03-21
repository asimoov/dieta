package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Menu extends Entity {

	private Integer week;
	
	private Integer status;

	@OneToMany(mappedBy = "menu", cascade = CascadeType.REMOVE)
	private List<Dish> dishs;
	
	public void setWeek(Integer week) {
		this.week = week;
	}

	public Integer getWeek() {
		return week;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public List<Dish> getDishs() {
		return dishs;
	}

	public void setDishs(List<Dish> dishs) {
		this.dishs = dishs;
	}

	public Integer getStatus() {
		return status;
	}

}
