# TEMPTATIONS

## GET /temptations?amount=[default: 3]&gender=[male|female|all, default: all]

```
GET /temptations?amount=[default: 3]&gender=[male|female|all, default: all]

200 OK
Content-Type: application/json

{
    "temptations": [
        {
            id: 1,
            name: 'Sabrina',
            imageUrl: 'http://...',
            gender: 'female',
            iq: 50
        },
        {
            id: 5,
            name: 'Sonja',
            imageUrl: 'http://...',
            gender: 'female',
            iq: 100
        },
        {
            id: 2,
            name: 'Piet',
            imageUrl: 'http://...',
            gender: 'male',
            iq: 79
        }
    ],
    "available_names": ['Jos', 'Maria', ...],
}
```
