CREATE TABLE IF NOT EXISTS user (
	user_id INTEGER PRIMARY KEY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	login TEXT NOT NULL,
	password TEXT NOT NULL,
    UNIQUE (login) ON CONFLICT REPLACE
);

insert into user (first_name, last_name, login, password)
values ("pipo","declown","pipo.declown","login123");



