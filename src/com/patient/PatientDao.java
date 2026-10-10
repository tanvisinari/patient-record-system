package com.patient;

import java.sql.*;

public class PatientDao {

    public void addPatient(int userId, String firstName, String lastName, String phone) {
        String sql = "INSERT INTO patients (user_id, first_name, last_name, phone) VALUES (?, ?, ?, ?)";
        
        try (Connection conn = DBConnection.getConnection();
             PreparedStatement pstmt = conn.prepareStatement(sql)) {
            
            pstmt.setInt(1, userId);
            pstmt.setString(2, firstName);
            pstmt.setString(3, lastName);
            pstmt.setString(4, phone);
            
            int rows = pstmt.executeUpdate();
            if (rows > 0) {
                System.out.println("Patient successfully inserted into MySQL!");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void getAllPatients() {
        String sql = "SELECT * FROM patients";
        
        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            
            System.out.println("\n--- Patient List ---");
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + " | Name: " + rs.getString("first_name") + " " + rs.getString("last_name"));
            }
            System.out.println("--------------------");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}