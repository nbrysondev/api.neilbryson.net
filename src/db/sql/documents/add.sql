INSERT INTO documents(name, content, created)
VALUES (${name}, ${content}, Now()) 
RETURNING id