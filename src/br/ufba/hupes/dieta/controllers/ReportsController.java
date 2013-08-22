package br.ufba.hupes.dieta.controllers;

import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Resource;
import br.com.caelum.vraptor.interceptor.download.Download;
import br.com.caelum.vraptor.interceptor.download.InputStreamDownload;
import net.sf.jasperreports.engine.*;
import org.hibernate.engine.spi.SessionImplementor;

import javax.persistence.EntityManager;
import javax.servlet.ServletContext;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;

@Resource
public class ReportsController {

	private EntityManager entityManager;
	private ServletContext context;
	
	public ReportsController(EntityManager entityManager, ServletContext context) {
		this.entityManager = entityManager;
		this.context = context;
	}

	@Get("/reports/scullery")
	public Download scullery() throws JRException {
		InputStream file = this.context.getResourceAsStream("WEB-INF/reports/scullery.jrxml");
		JasperReport jasperReport = JasperCompileManager.compileReport(file);
		Map<String, Object> parametros = new HashMap<String, Object>();
		//parametros.put("nomeAluno", nome);
		//parametros.put("codigo", "6503000");

		SessionImplementor hibernateSession = this.entityManager.unwrap(SessionImplementor.class);
		Connection connection = hibernateSession.connection(); 
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parametros, connection);

		ByteArrayOutputStream os = new ByteArrayOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, os);
		InputStream document = new ByteArrayInputStream(os.toByteArray());

		return new InputStreamDownload(document, "application/pdf",
				"scullery.pdf", true, os.toByteArray().length);
	}
	
	@Get("/reports/clinic")
	public Download clinic() throws JRException {
		InputStream file = this.context.getResourceAsStream("WEB-INF/reports/clinic.jrxml");
		JasperReport jasperReport = JasperCompileManager.compileReport(file);
		Map<String, Object> parametros = new HashMap<String, Object>();
		//parametros.put("nomeAluno", nome);
		//parametros.put("codigo", "6503000");

		SessionImplementor hibernateSession = this.entityManager.unwrap(SessionImplementor.class);
		Connection connection = hibernateSession.connection(); 
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parametros, connection);

		ByteArrayOutputStream os = new ByteArrayOutputStream();
		JasperExportManager.exportReportToPdfStream(jasperPrint, os);
		InputStream document = new ByteArrayInputStream(os.toByteArray());

		return new InputStreamDownload(document, "application/pdf",
				"clinic.pdf", true, os.toByteArray().length);
	}
}
