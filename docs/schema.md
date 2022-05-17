#Schema Design
pk = primary key

## Products Table
```
    id serial [pk]
    title varchar(64)
    price numeric (8, 2)
    description text
    owner int [foreign key]
```