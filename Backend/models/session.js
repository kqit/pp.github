const queryTableSession=`
CREATE TABLE Session (
    id_session varchar NOT NULL UNIQUE,
    id_tag varchar REFERENCES Tag(id_tag)
);
`
module.exports = queryTableSession