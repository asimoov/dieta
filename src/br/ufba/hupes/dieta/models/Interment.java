package br.ufba.hupes.dieta.models;

import java.util.Date;

import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@javax.persistence.Entity
public class Interment extends Entity {

	private Date input;
	
	private String bed;

	@ManyToOne(fetch = FetchType.EAGER)
	private Patient patient;

	@ManyToOne(fetch = FetchType.EAGER)
	private Ward ward;

	public void setInput(Date input) {
		this.input = input;
	}

	public Date getInput() {
		return input;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setWard(Ward ward) {
		this.ward = ward;
	}

	public Ward getWard() {
		return ward;
	}

	public String getBed() {
		return bed;
	}

	public void setBed(String bed) {
		this.bed = bed;
	}
}
