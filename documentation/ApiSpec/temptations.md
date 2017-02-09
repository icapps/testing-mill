# TEMPTATIONS

## GET /temptations?amount=[default: 3]&gender=[male|female|all, default: all]

### 200 OK
### Content-Type: application/json

```
{
    "temptations": [
        {
            id: 1,
            name: 'Sabrina',
            imageUrl: 'http://...',
            gender: 'female'
        },
        {
            id: 5,
            name: 'Sonja',
            imageUrl: 'http://...',
            gender: 'female'
        },
        {
            id: 2,
            name: 'Piet',
            imageUrl: 'http://...',
            gender: 'male'
        }
    ]
}
```
