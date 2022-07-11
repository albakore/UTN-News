CREATE TABLE social_likebutton (
	id SERIAL PRIMARY KEY,
	id_news INT,
	id_user INT,
	like_counter SMALLINT
);

create table social_clickscounter (
	id SERIAL PRIMARY KEY,
	id_news INT
);
