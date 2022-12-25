const queryTableTag=`
CREATE TABLE Tag (
    id_tag varchar(15) NOT NULL UNIQUE PRIMARY KEY,
    id_food varchar,
    mass float4
    );
`
module.exports = queryTableTag