package br.ufba.hupes.dieta.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Version;

@javax.persistence.Entity
@SequenceGenerator(name = "SEQUENCE", sequenceName = "SEQ_FOOD") 
public class Food extends Entity {

	private String description;
	
	private Integer unit;

	private Integer type;

	private Double calories;
	
	private Double protein;
	
	private Double lipids;
	
	private Double carbohydrate;
	
	private Double fibre;
	
	private Double calcium;
	
	private Double magnesium;
	
	private Double manganese;
	
	private Double phosphorus;
	
	private Double iron;
	
	private Double sodium;
	
	private Double additionOfSodium;
	
	private Double potassium;
	
	private Double copper;
	
	private Double zinc;
	
	private Double selenium;
	
	private Double retinol;
	
	private Double a;
	
	private Double b1;
	
	private Double b2;
	
	private Double b3;
	
	private Double equivalentB3;
	
	private Double b6;
	
	private Double b12;
	
	private Double folate;
	
	private Double d;
	
	private Double e;
	
	private Double c;
	
	private Double cholesterol;
	
	private Double satturedFattyAcid;
	
	private Double monounsaturatedFattyAcids;
	
	private Double polyunsaturatedFattyAcids;
	
	private Double linoleic;
	
	private Double linolenic;
	
	private Double transFattyAcidTotal;
	
	private Double sugar;
	
	private Double additionSugar;
	
	@OneToMany(mappedBy = "food", cascade = CascadeType.REMOVE)
	public List<Variation> variations;

	@Version
	private Long version;
	
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

	public List<Variation> getVariations() {
		return variations;
	}

	public void setVariations(List<Variation> variations) {
		this.variations = variations;
	}

	public Integer getType() {
		return type;
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

	public Double getLipids() {
		return lipids;
	}

	public void setLipids(Double lipids) {
		this.lipids = lipids;
	}

	public Double getCarbohydrate() {
		return carbohydrate;
	}

	public void setCarbohydrate(Double carbohydrate) {
		this.carbohydrate = carbohydrate;
	}

	public Double getFibre() {
		return fibre;
	}

	public void setFibre(Double fibre) {
		this.fibre = fibre;
	}

	public Double getCalcium() {
		return calcium;
	}

	public void setCalcium(Double calcium) {
		this.calcium = calcium;
	}

	public Double getMagnesium() {
		return magnesium;
	}

	public void setMagnesium(Double magnesium) {
		this.magnesium = magnesium;
	}

	public Double getManganese() {
		return manganese;
	}

	public void setManganese(Double manganese) {
		this.manganese = manganese;
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

	public Double getSodium() {
		return sodium;
	}

	public void setSodium(Double sodium) {
		this.sodium = sodium;
	}

	public Double getAdditionOfSodium() {
		return additionOfSodium;
	}

	public void setAdditionOfSodium(Double additionOfSodium) {
		this.additionOfSodium = additionOfSodium;
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

	public Double getZinc() {
		return zinc;
	}

	public void setZinc(Double zinc) {
		this.zinc = zinc;
	}

	public Double getSelenium() {
		return selenium;
	}

	public void setSelenium(Double selenium) {
		this.selenium = selenium;
	}

	public Double getRetinol() {
		return retinol;
	}

	public void setRetinol(Double retinol) {
		this.retinol = retinol;
	}

	public Double getA() {
		return a;
	}

	public void setA(Double a) {
		this.a = a;
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

	public Double getB3() {
		return b3;
	}

	public void setB3(Double b3) {
		this.b3 = b3;
	}

	public Double getEquivalentB3() {
		return equivalentB3;
	}

	public void setEquivalentB3(Double equivalentB3) {
		this.equivalentB3 = equivalentB3;
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

	public Double getC() {
		return c;
	}

	public void setC(Double c) {
		this.c = c;
	}

	public Double getCholesterol() {
		return cholesterol;
	}

	public void setCholesterol(Double cholesterol) {
		this.cholesterol = cholesterol;
	}

	public Double getSatturedFattyAcid() {
		return satturedFattyAcid;
	}

	public void setSatturedFattyAcid(Double satturedFattyAcid) {
		this.satturedFattyAcid = satturedFattyAcid;
	}

	public Double getMonounsaturatedFattyAcids() {
		return monounsaturatedFattyAcids;
	}

	public void setMonounsaturatedFattyAcids(Double monounsaturatedFattyAcids) {
		this.monounsaturatedFattyAcids = monounsaturatedFattyAcids;
	}

	public Double getPolyunsaturatedFattyAcids() {
		return polyunsaturatedFattyAcids;
	}

	public void setPolyunsaturatedFattyAcids(Double polyunsaturatedFattyAcids) {
		this.polyunsaturatedFattyAcids = polyunsaturatedFattyAcids;
	}

	public Double getLinoleic() {
		return linoleic;
	}

	public void setLinoleic(Double linoleic) {
		this.linoleic = linoleic;
	}

	public Double getLinolenic() {
		return linolenic;
	}

	public void setLinolenic(Double linolenic) {
		this.linolenic = linolenic;
	}

	public Double getTransFattyAcidTotal() {
		return transFattyAcidTotal;
	}

	public void setTransFattyAcidTotal(Double transFattyAcidTotal) {
		this.transFattyAcidTotal = transFattyAcidTotal;
	}

	public Double getSugar() {
		return sugar;
	}

	public void setSugar(Double sugar) {
		this.sugar = sugar;
	}

	public Double getAdditionSugar() {
		return additionSugar;
	}

	public void setAdditionSugar(Double additionSugar) {
		this.additionSugar = additionSugar;
	}

	public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
	}
}
