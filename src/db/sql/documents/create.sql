CREATE TABLE documents
(
    id serial PRIMARY KEY,
    name text NOT NULL UNIQUE,
    content json NOT NULL,
    created timestamp NOT NULL,
    lastModified timestamp DEFAULT NULL
);