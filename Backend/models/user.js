const queryTableUser=`
CREATE TABLE Users (
    id char(10) NOT NULL UNIQUE PRIMARY KEY,
    username varchar(30) NOT NULL UNIQUE,
    password varchar(30) NOT NULL,
    id_profile varchar(10) REFERENCES Profile(id_profile),
    id_target varchar(10) REFERENCES Target(id_target),
    id_schedule varchar(10) REFERENCES Schedule(id_schedule)
     
);
`
module.exports = queryTableUser