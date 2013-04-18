package br.ufba.hupes.dieta.models;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Diet extends Entity {

	@ManyToOne(optional = false)
	private Patient patient;
	
	private Integer status;

	@OneToMany(mappedBy = "diet", cascade = CascadeType.REMOVE)
	private List<Meal> meals;
	
	private Integer levelOfAssistance;
	
	private Date createdAt;
	
	public Diet() {
		this.createdAt = new Date();
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	public Integer getStatus() {
		return status;
	}

	public List<Meal> getMeals() {
		return meals;
	}

	public void setMeals(List<Meal> meals) {
		this.meals = meals;
	}

	public Integer getLevelOfAssistance() {
		return levelOfAssistance;
	}

	public void setLevelOfAssistance(Integer levelOfAssistance) {
		this.levelOfAssistance = levelOfAssistance;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
}
