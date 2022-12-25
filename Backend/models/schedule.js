const queryTableSchedule=`
CREATE TABLE Schedule (
    id_schedule varchar(10) NOT NULL UNIQUE PRIMARY KEY,
    times date,
    id_task varchar REFERENCES Session(id_session)
);
`
module.exports = queryTableSchedule