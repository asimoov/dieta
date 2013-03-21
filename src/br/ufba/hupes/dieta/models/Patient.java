package br.ufba.hupes.dieta.models;

import java.util.Date;
import java.util.List;

import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Patient extends Entity {

	private Long handbook;
	private String name;
	private String sex;
	private String email;
	private String phone;
	private Date bird;
	private String address;
	private String complement;
	private String uf;
	private String cep;

	@OneToMany(mappedBy = "patient")
	private List<Diet> diets;

	@OneToMany(mappedBy = "patient")
	public List<Interment> interments;
	
	public void setHandbook(Long handbook) {
		this.handbook = handbook;
	}

	public Long getHandbook() {
		return handbook;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public String getSex() {
		return sex;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return email;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getPhone() {
		return phone;
	}

	public void setBird(Date bird) {
		this.bird = bird;
	}

	public Date getBird() {
		return bird;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAddress() {
		return address;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}

	public String getComplement() {
		return complement;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getUf() {
		return uf;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCep() {
		return cep;
	}

	public List<Diet> getDiets() {
		return diets;
	}

	public void setDiets(List<Diet> diets) {
		this.diets = diets;
	}

	public List<Interment> getInterments() {
		return interments;
	}

	public void setInterments(List<Interment> interments) {
		this.interments = interments;
	}

}
