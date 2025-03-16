drop table user;

CREATE TABLE IF NOT EXISTS user (
	user_id INTEGER PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	login TEXT NOT NULL,
	password TEXT NOT NULL,
    UNIQUE (login) ON CONFLICT REPLACE
);

insert into user (first_name, last_name, login, password)
values ("Warre","Demey","warre.demey","login123");
insert into user (first_name, last_name, login, password)
values ("Tibo","Keyngnaert","tibo.keyngnaert","login123");
insert into user (first_name, last_name, login, password)
values ("Rune","Lambert","rune.lambert","login123");
insert into user (first_name, last_name, login, password)
values ("Jasper","Lanoote","jasper.lanoote","login123");
insert into user (first_name, last_name, login, password)
values ("Mauritz","Verbeke","mauritz.verbeke","login123");







