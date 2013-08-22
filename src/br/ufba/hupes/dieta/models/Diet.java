package br.ufba.hupes.dieta.models;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@javax.persistence.Entity
@SequenceGenerator(name = "SEQUENCE", sequenceName = "SEQ_DIET") 
public class Diet extends Entity {
	
	private Integer status;

	private Integer levelOfAssistance;
	
	private Double weight;
	
	private Double height;
	
	private Boolean companion;
	
	@Column(length = 4000)
	private String observation;
	
	private Date createdAt;
	
	@ManyToOne(optional = false)
	private Patient patient;
	
	@OneToMany(mappedBy = "diet", cascade = CascadeType.ALL)
	private List<Meal> meals;
	
	@Version
	private Long version;
	
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

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Boolean getCompanion() {
		return companion;
	}

	public void setCompanion(Boolean companion) {
		this.companion = companion;
	}

	public String getObservation() {
		return observation;
	}

	public void setObservation(String observation) {
		this.observation = observation;
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

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
}
