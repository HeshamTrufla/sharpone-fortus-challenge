# Fortus Coding Challenge

### Description:

the task is to integrate with one of the available services in Fortus API ( RateBridge ).

EndPoint: https://asicanuat.appliedcloudservices.com/RatingWebService/Version1.asmx


Fortus does on provide (Soap - XML) API, therefore we need to build a layer
on top of it to provide our internal projects with a Restful RateBridge service with caching in mind.

<hr />

### User Story:  
**as a**  
API consumer  
**I want to be able to**  
call a Restful Endpoint "JSON" to consume Fortus RateBridge service

<hr />

### Documentation and references:
* [Fortus Documentation](/fortus%20documentation)

<hr />

**Stack**

- [ ] [Node.js](https://nodejs.org/en/docs/)
- [ ] [NodeArch - Hapi](https://www.npmjs.com/package/nodearch)
- [ ] [Swagger Docs]()