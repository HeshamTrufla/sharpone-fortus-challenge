# Fortus Coding Challenge

### Description:

the main task is to integrate with one of the available services in Fortus API ( RateBridge ).

Fortus only provides (Soap - XML) API, therefore we need to build a layer
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
    * The latest Fortus documentation is also available for download at the link below.
    The documentation is for the Fortus data model.
        ```text
        URL:  https://updates.compu-quote.com/webclients
        Username:  DULIBAN
        Password:   y7TjmNLJ4f (case sensitive)
        ```
    * **Test Account:**  Credentials for Applied are required to use the web services.
    Below, are the credentials for the TEST versions of the web services.
        ```text
         Username:  DulFortus0000
         Password:  D7b5op03 (case sensitive)
        ```
        *note*: some of the web services, like the Rating Web Service, require that this password be Base64 encoded.  You can do that through code, or you could just use RDdiNW9wMDM=
    * **RateBridge Web Service:**:
        ```text
        URL: https://www10.compu-quote.com/TEST/RateBridge/Integration/Version1.asmx
        Credentials:  as per above, password needs to be Base64 encoded.
        ```

<hr />

### Task Checklist 

please, check what you have done so far.

- [ ] build a Restful API to integrate with RateBridge. [ Required ]
- [ ] use [NodeArch](https://www.npmjs.com/package/nodearch) with hapi.js [ Optional ]
- [ ] Cache responses to be able to retrieve it again anytime. [ Optional ]
- [ ] write test cases [ Optional ]
- [ ] use Docker [ Optional ]