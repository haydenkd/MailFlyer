USE mailflyer_db;

INSERT INTO email_addresses
    (email, unsubscribed)
VALUES
    ("tom@mail.com", 0),
    ("bob@mail.com", 0),
    ("sam@mail.com", 0),
    ("amy@mail.com", 0),
    ("sue@mail.com", 0);

INSERT INTO flyer_type
    (type, description)
VALUES
    ("Inspirational", "Send an inspirational email to friends."),
    ("Silly", "Send something silly to your friends");

INSERT INTO flyer_frequency
    (frequency)
VALUES
    ("Daily"),
    ("Weekly"),
    ("Monthly"),
    ("Annually");

INSERT INTO flyer_list
    (owner_id, content_id, start_date, stop_date, freq_id, active)
VALUES
    (1, 1, "2021-3-20 23:59:59", "2021-3-28 23:59:59", 1, 1),
    (2, 1, "2021-3-20 23:59:59", "2021-3-28 23:59:59", 1, 1),
    (2, 1, "2021-3-20 23:59:59", "2021-3-28 23:59:59", 1, 1);

INSERT INTO flyer_recipients
    (mail_list_id, recipient_id)
VALUES
    (1, 3),
    (1, 4),
    (2, 5),
    (3, 4);