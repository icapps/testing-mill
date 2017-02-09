# USERS

## GET /users

```
GET /users

200 OK
Content-Type: application/json

{
    "users": {
        [
            {
                "id": 1,
                "name": "Jean",
                "temptationIq": 10,
                "games_played": 5
            }
        ]
    }
}
```

## GET /users/:id

```
GET /users/:id

200 OK
Content-Type: application/json

{
    "user": {
        "id": 1,
        "name": "Jean",
        "temptationIq": 10,
        "games_played": 5
    }
}
```

## POST /users

```
POST /users
Content-Type: application/json

{
  "name": "Jean"
}

200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Jean",
  "temptationIq": 100,
  "games_played": 0
}

400 INVALID REQUEST
Content-Type: application/json

{
    "errors": {
        "status": 400,
        "title": "Invalid Request",
        "Detail": "Name is required"

    }
}
```

