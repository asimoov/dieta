package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.Id;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Ward {

	@Id
	private String id;
	
	private String description;

	@OneToMany(mappedBy = "ward")
	public List<Interment> interments;

	public void setId(String id) {
		this.id = id;
	}

	public String getId() {
		return id;
	}
	
	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public List<Interment> getInterments() {
		return interments;
	}

	public void setInterments(List<Interment> interments) {
		this.interments = interments;
	}

}
