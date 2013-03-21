package br.ufba.hupes.dieta.models;

public enum Type {
	Solida, Liquida, Enteral;
	
	public Boolean isCompatible(Type type) {
		if (this.equals(type)) {
			return true;
		} else if (this.equals(Type.Solida) && (type == Type.Solida || type == Type.Liquida)) {
			return true;
		} else if (this.equals(Type.Liquida) && type == Type.Liquida) {
			return true;
		} else if (this.equals(Type.Enteral) && type == Type.Enteral) {
			return true;
		}

		return false;
	}
}
