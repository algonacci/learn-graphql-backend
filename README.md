# learn-graphql-backend
The personal documentation of me learning GraphQL


```
query Query {
  getAllBooks {
    _id
    title
    author
    description
    release_year
    genre
  }
}
```


```
mutation Mutation {
  updateBook(
    _id: "62f7af43bb57a06668a7c88a",
    title: "Buku Mahal",
    author: "ini setelah update",
    description: "test update",
    release_year: 2016
    genre: "habis diupdate"
  ) {
    title,
    author,
    genre,
    release_year,
    description
  }
}
```

```
mutation {
    deleteBook(_id: "62f7af43bb57a06668a7c88a")
}
```


```
mutation Mutation {
  createBook(
    title: "Test Bikin Buku",
    author: "Test Bikin Buku",
    description: "Test Bikin Buku",
    release_year: 2016
    genre: "Test Bikin Buku"
  ) {
    title,
    author,
    genre,
    release_year,
    description
  }
}
```
