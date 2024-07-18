-- Create table
 CREATE TABLE Memory (
     eletech_id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
     timestamp varchar(255) NOT NULL,
     type CHAR NOT NULL,
     individual varchar(255),
     location varchar(255),
     out_of_area BOOLEAN,
     alert BOOLEAN NOT NULL
 );

-- Generate Filler Data
-- INSERT INTO Memory (timestamp, type, location, out_of_area, alert) VALUES ("2024-07-18T17:10:01+00:00", "g", "40.766229, -73.979673", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, location, out_of_area, alert) VALUES ("2024-07-18T17:15:01+00:00", "g", "40.766229, -73.979673", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, location, out_of_area, alert) VALUES ("2024-07-18T17:20:01+00:00", "g", "40.766229, -73.979673", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-11T17:28:23+00:00", "f", "Lisa, Miller", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-11T17:28:55+00:00", "f", "Sarah, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-12T17:28:55+00:00", "f", "Sarah, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-13T17:28:55+00:00", "f", "Sarah, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-14T17:28:55+00:00", "f", "Sarah, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-15T17:28:55+00:00", "f", "Sarah, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-16T17:28:55+00:00", "f", "Sarah, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-17T17:28:55+00:00", "f", "Mike, Smith", FALSE, FALSE);
-- INSERT INTO Memory (timestamp, type, individual, out_of_area, alert) VALUES ("2024-07-18T17:28:55+00:00", "f", "Unknown", FALSE, TRUE);
-- INSERT INTO Memory (timestamp, type, location, out_of_area, alert) VALUES ("2024-07-18T17:30:01+00:00", "g", "40.768667, -73.984996", TRUE, TRUE);
-- INSERT INTO Memory (timestamp, type, location, out_of_area, alert) VALUES ("2024-07-18T17:35:01+00:00", "g", "40.768276, -73.984200", TRUE, TRUE);