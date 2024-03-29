package com.ossarol.veggiesbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class VeggiesBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(VeggiesBackendApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			public void addCorsMappings(CorsRegistry registry) {
				//registry.addMapping("/**").allowedMethods("*").allowedOrigins("http://localhost:5173");
				registry.addMapping("/**").allowedMethods("*").allowedOrigins("*");
			}
		};
	}

}
