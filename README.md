# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates an uncommon error related to the MongoDB $inc operator. The error occurs when attempting to increment a numeric field that does not exist in a document. 

## Bug Description
The `$inc` operator in MongoDB is used to increment a numeric field by a specified value. If the field does not exist in the document, the `$inc` operator will not create it with a default value of 0 and will not update the document. This can lead to unexpected behavior and data inconsistencies.