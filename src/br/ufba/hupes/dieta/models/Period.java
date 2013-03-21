package br.ufba.hupes.dieta.models;

import java.util.Arrays;
import java.util.List;

public enum Period {
	HORA_02(Arrays.asList(Type.Enteral)), HORA_05(Arrays.asList(Type.Enteral)), HORA_08(Arrays.asList(Type.Solida, Type.Liquida, Type.Enteral)),
	HORA_10(Arrays.asList(Type.Solida, Type.Liquida)), HORA_11(Arrays.asList(Type.Enteral)), HORA_14(Arrays.asList(Type.Enteral)), 
	HORA_17(Arrays.asList(Type.Enteral)), HORA_20(Arrays.asList(Type.Enteral)), HORA_23(Arrays.asList(Type.Enteral)), 
	HORA_09(Arrays.asList(Type.Enteral)), HORA_12(Arrays.asList(Type.Enteral)), HORA_15(Arrays.asList(Type.Enteral, Type.Solida, Type.Liquida)), 
	HORA_18(Arrays.asList(Type.Enteral, Type.Solida, Type.Liquida)), HORA_21(Arrays.asList(Type.Enteral, Type.Solida, Type.Liquida)), HORA_00(Arrays.asList(Type.Enteral)), 
	HORA_03(Arrays.asList(Type.Enteral));

	private List<Type> types;
	
	private Period(List<Type> types) {
		this.types = types;
	}

	public List<Type> getTypes() {
		return types;
	}

	public Boolean isContains(Type type) {
		return this.types.contains(type);
	}
	
	public static Period getPeriodByHour(Integer hour) {
		//String.format("HORA_%01d", hour);
		if(hour == 2) {
			return HORA_02;
		} else if (hour == 5) {
			return HORA_05;
		} else if (hour == 8) {
			return HORA_08;
		} else if (hour == 10) {
			return HORA_10;
		} else if (hour == 11) {
			return HORA_11;
		} else if (hour == 14) {
			return HORA_14;
		} else if (hour == 17) {
			return HORA_17;
		} else if (hour == 20) {
			return HORA_20;
		} else if (hour == 23) {
			return HORA_23;
		} else if (hour == 9) {
			return HORA_09;
		} else if (hour == 12) {
			return HORA_12;
		} else if (hour == 15) {
			return HORA_15;
		} else if (hour == 18) {
			return HORA_18;
		} else if (hour == 21) {
			return HORA_21;
		} else if (hour == 0) {
			return HORA_00;
		} else if (hour == 3) {
			return HORA_03;
		}
		
		return null;
	}
}
