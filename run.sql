-- PATIENT
CREATE OR REPLACE FORCE VIEW "DIETA"."PATIENT" (id, handbook, name, sex, email, phone, bird, address, complement, uf, cep,
  PRIMARY KEY ("ID") DISABLE)
AS
	SELECT DISTINCT
	      PAC_REG               AS id,
              PAC_PRONT             AS handbook,
	      PAC_NOME              AS name,
	      PAC_SEXO              AS sex,
	      PAC_EMAIL             AS email,
	      PAC_FONE              AS phone,
	      PAC_NASC              AS bird,
	      PAC_END               AS address,
	      PAC_COMP              AS complement,
	      PAC_UF                AS uf,
	      PAC_CEP               AS cep
	  FROM
	  SMART.PAC;

-- Interment
CREATE OR REPLACE FORCE VIEW "DIETA"."INTERMENT" (id, input, bed, cid, patient_id, ward_id,
  PRIMARY KEY ("ID") DISABLE)
AS
   SELECT TO_NUMBER(HSP_PAC || HSP_NUM) AS id,
	    HSP_DTHRE             AS input,
	    LOC_NOME              AS bed,
	    CID_NOME              AS cid,
	    HSP_PAC               AS patient_id,
	    STR_COD               AS ward_id
	  FROM SMART.HSP
	  LEFT JOIN SMART.LOC
            ON(HSP_LOC = LOC_COD)
	  LEFT JOIN SMART.STR
          ON(LOC_STR = STR_COD)
      LEFT JOIN SMART.PDG
          ON(HSP_PAC       = PDG_PAC AND HSP_NUM = PDG_NUM)
      LEFT JOIN SMART.CID
          ON(PDG_CID       = CID_COD)
	  WHERE HSP_DTHRA is null
          AND HSP_STAT = 'A'
	  ORDER BY HSP_DTHRE DESC, HSP_PAC;

-- WARD
CREATE OR REPLACE FORCE VIEW "DIETA"."WARD" (ID, DESCRIPTION,
  PRIMARY KEY ("ID") DISABLE)
AS
  SELECT DISTINCT STR_COD AS id,
    STR_NOME              AS description
  FROM SMART.STR s
  LEFT JOIN SMART.LOC
   ON(STR_COD = LOC_STR)
  LEFT JOIN SMART.HSP
   ON(LOC_COD = HSP_LOC)
  WHERE HSP_STAT = 'A'
