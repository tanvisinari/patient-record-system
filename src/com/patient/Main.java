package com.patient;

public class Main {
    public static void main(String[] args) {
        System.out.println("Running Java JDBC Backend...");
        PatientDao dao = new PatientDao();
        
        // Test fetching patients
        dao.getAllPatients();
    }
}