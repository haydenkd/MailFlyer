DROP DATABASE IF EXISTS  mailflyer_db;

CREATE DATABASE mailflyer_db;
USE mailflyer_db;

CREATE TABLE email_addresses
(
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(255),
    unsubscribed BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE flyer_type
(
    id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(32) NOT NULL,
    description VARCHAR(64),
    PRIMARY KEY (id)
);

CREATE TABLE flyer_frequency
(
    id INT NOT NULL AUTO_INCREMENT,
    frequency VARCHAR(32),
    PRIMARY KEY (id)
);

CREATE TABLE flyer_list 
(
    id INT NOT NULL AUTO_INCREMENT,
    owner_id INT NULL,
    CONSTRAINT fk_owner FOREIGN KEY (owner_id) REFERENCES email_addresses(id) ON DELETE SET NULL,
    content_id INT NULL,
    CONSTRAINT fk_content FOREIGN KEY (content_id) REFERENCES flyer_type(id) ON DELETE SET NULL,
    start_date DATETIME NOT NULL,
    stop_date DATETIME,
    freq_id INT NULL,
    CONSTRAINT fk_freq FOREIGN KEY (freq_id) REFERENCES flyer_frequency(id) ON DELETE SET NULL,
    active BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE flyer_recipients
(
    id INT NOT NULL AUTO_INCREMENT,
    flyer_id INT NULL,
    CONSTRAINT fk_flyer_list FOREIGN KEY (flyer_id) REFERENCES flyer_list(id) ON DELETE SET NULL,
    recipient_id INT NULL,
    CONSTRAINT fk_recipient FOREIGN KEY (recipient_id) REFERENCES email_addresses(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);