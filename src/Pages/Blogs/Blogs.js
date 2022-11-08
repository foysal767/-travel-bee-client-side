import React from 'react';

const Blogs = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    1. What is the Difference between SQL and NoSQL?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL
                </p>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    2. What is JWT? And how does it works?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    JWT: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    How JWT works:
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    Once decoded, you will get two JSON strings:
                    a. The header and the payload.
                    b. The signature.
                    The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                </p>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    3. What is the difference between Javascript and Node js?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    JavaScript :
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                    NodeJS :
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                </p>
            </div>
            <div className='mb-4'>
                <h1 className='text-3xl font-bold mb-2'>
                    4. How does Node Js handle multiple requests at the same time?
                </h1>
                <p className='text-xl font-medium'>
                    Ans:
                    We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                    How NodeJS handle multiple client requests?
                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blogs;