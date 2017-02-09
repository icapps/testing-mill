# GAMES

## POST /users/:id/games
### Content-Type: application/json

```
{
    "game": {
        "answers": [
            {
                temptationId: 1,
                name: 'Sonja',
                iq: 34
            },
            {
                temptationId: 5,
                name: 'Sara',
                iq: 3
            },
            {
                temptationId: 8,
                name: 'Ronny',
                iq: 14
            }
        ]
    ]
}
```

### 200 OK
### Content-Type: application/json

```
{
    "game": {
        "score": 12, # /100
    },
    "user": {
        "id": 1,
        "name": "Pol",
        "temptationIq": 56,
        "gamesPlayed": 1
    }
}
```

### 400 INVALID REQUEST
### Content-Type: application/json

```
{
    "errors": {
        "status": 400,
        "title": "Invalid Request",
        "Detail": ""

    }
}
```
