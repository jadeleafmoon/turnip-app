#Schema Design
pk = primary key

## Items Table
```
    id serial [pk]
    name varchar(64)
    price numeric (8, 2)
    description text
    owner int [foreign key]
```