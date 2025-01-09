```javascript
// Correct usage of $inc operator with default value
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{count:1}, $setOnInsert:{count:0}});
```