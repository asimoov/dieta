package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;

@javax.persistence.Entity
public class Food extends Entity {

	private String description;
	
	private Integer unit;

	private Integer type;

	private Double calories;
	
	private Double protein;
	
	private Double carbohydrate;
	
	private Double lipids;
	
	private Double sodium;
	
	private Double calcium;
	
	private Double zinc;
	
	private Double phosphorus;
	
	private Double iron;
	
	private Double fibre;
	
	private Double potassium;
	
	private Double copper;
	
	private Double selenium;
	
	private Double a;
	
	private Double c;
	
	private Double d;
	
	private Double e;
	
	private Double k;
	
	private Double mg;
	
	private Double mn;
	
	private Double b1;
	
	private Double b2;
	
	private Double b3Nia;
	
	private Double b5Pant;
	
	private Double b6;
	
	private Double b12;
	
	private Double folate;
	
	private Double b8Bio;
	
	@OneToMany(mappedBy = "food", cascade = CascadeType.REMOVE)
	public List<Variation> variations;

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setUnit(Integer unit) {
		this.unit = unit;
	}

	public Integer getUnit() {
		return unit;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Double getCalories() {
		return calories;
	}

	public void setCalories(Double calories) {
		this.calories = calories;
	}

	public Double getProtein() {
		return protein;
	}

	public void setProtein(Double protein) {
		this.protein = protein;
	}

	public Double getCarbohydrate() {
		return carbohydrate;
	}

	public void setCarbohydrate(Double carbohydrate) {
		this.carbohydrate = carbohydrate;
	}

	public Double getLipids() {
		return lipids;
	}

	public void setLipids(Double lipids) {
		this.lipids = lipids;
	}

	public Double getSodium() {
		return sodium;
	}

	public void setSodium(Double sodium) {
		this.sodium = sodium;
	}

	public Double getCalcium() {
		return calcium;
	}

	public void setCalcium(Double calcium) {
		this.calcium = calcium;
	}

	public Double getZinc() {
		return zinc;
	}

	public void setZinc(Double zinc) {
		this.zinc = zinc;
	}

	public Double getPhosphorus() {
		return phosphorus;
	}

	public void setPhosphorus(Double phosphorus) {
		this.phosphorus = phosphorus;
	}

	public Double getIron() {
		return iron;
	}

	public void setIron(Double iron) {
		this.iron = iron;
	}

	public Double getFibre() {
		return fibre;
	}

	public void setFibre(Double fibre) {
		this.fibre = fibre;
	}

	public Double getPotassium() {
		return potassium;
	}

	public void setPotassium(Double potassium) {
		this.potassium = potassium;
	}

	public Double getCopper() {
		return copper;
	}

	public void setCopper(Double copper) {
		this.copper = copper;
	}

	public Double getSelenium() {
		return selenium;
	}

	public void setSelenium(Double selenium) {
		this.selenium = selenium;
	}

	public Double getA() {
		return a;
	}

	public void setA(Double a) {
		this.a = a;
	}

	public Double getC() {
		return c;
	}

	public void setC(Double c) {
		this.c = c;
	}

	public Double getD() {
		return d;
	}

	public void setD(Double d) {
		this.d = d;
	}

	public Double getE() {
		return e;
	}

	public void setE(Double e) {
		this.e = e;
	}

	public Double getK() {
		return k;
	}

	public void setK(Double k) {
		this.k = k;
	}

	public Double getMg() {
		return mg;
	}

	public void setMg(Double mg) {
		this.mg = mg;
	}

	public Double getMn() {
		return mn;
	}

	public void setMn(Double mn) {
		this.mn = mn;
	}

	public Double getB1() {
		return b1;
	}

	public void setB1(Double b1) {
		this.b1 = b1;
	}

	public Double getB2() {
		return b2;
	}

	public void setB2(Double b2) {
		this.b2 = b2;
	}

	public Double getB3Nia() {
		return b3Nia;
	}

	public void setB3Nia(Double b3Nia) {
		this.b3Nia = b3Nia;
	}

	public Double getB5Pant() {
		return b5Pant;
	}

	public void setB5Pant(Double b5Pant) {
		this.b5Pant = b5Pant;
	}

	public Double getB6() {
		return b6;
	}

	public void setB6(Double b6) {
		this.b6 = b6;
	}

	public Double getB12() {
		return b12;
	}

	public void setB12(Double b12) {
		this.b12 = b12;
	}

	public Double getFolate() {
		return folate;
	}

	public void setFolate(Double folate) {
		this.folate = folate;
	}

	public Double getB8Bio() {
		return b8Bio;
	}

	public void setB8Bio(Double b8Bio) {
		this.b8Bio = b8Bio;
	}

	public List<Variation> getVariations() {
		return variations;
	}

	public void setVariations(List<Variation> variations) {
		this.variations = variations;
	}

	public Integer getType() {
		return type;
	}

}
