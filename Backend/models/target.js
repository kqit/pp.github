const queryTableTarget=`
CREATE TABLE Target (
    id_target varchar(10) NOT NULL UNIQUE PRIMARY KEY,
    calo integer,
    cacbohydrate integer,
    protein integer,
    lipit integer,
    times date
);
`
module.exports = queryTableTarget