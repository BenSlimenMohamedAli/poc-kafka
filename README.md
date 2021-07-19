# NestJs with Kafka

### Status: Open
### Deciders :

- @Ben Slimen Mohamed Ali

### Date: July 8, 2021

### Technical story : 
- https://aos.atlassian.net/browse/AOS-4976

### Context and problem statement

One of the challenges that we have always faced in building applications, and systems as a whole, is how to exchange information between them efficiently whilst retaining the flexibility to modify the interfaces without undue impact elsewhere. 

Events offer a Goldilocks-style approach in which real-time APIs can be used as the foundation for applications which is flexible yet performant; loosely-coupled yet efficient. If you think about the business domain in which you work, you can probably think of many examples of events. They can be human-generated interactions, and they can be machine-generated. 

The main challenge is the integration of apache kafka with nestjs and the ease of use.

## Decision Drivers <!-- optional -->

* standardization
* productivity


## Stack

* NestJs
* Kafka

## Kafka overview

Apache Kafka offers a scalable event streaming platform with which you can build applications around the powerful concept of events. Kafka includes stream processing capabilities through the Kafka Streams API. 

### Kafka topic

A Topic is a category/feed name to which records are stored and published.

All Kafka records are organized into topics. Producer applications write data to topics and consumer applications read from topics. Records published to the cluster stay in the cluster until a configurable retention period has passed by.

### Consumers and consumer groups

Consumers can read messages starting from a specific offset and are allowed to read from any offset point they choose. This allows consumers to join the cluster at any point in time.

## Pros

#### Low Latency

It is capable of handling these messages with the very low latency of the range of milliseconds, demanded by most of the new use cases.

#### Durability

Here, durability refers to the persistence of data/messages on disk. Also, messages replication is one of the reasons behind durability, hence messages are never lost.

#### Easy integration with NestJs

with the decorators, integrating and using Kafka with NestJs is super easy.

## Cons

#### Lack of documentation

Outside of the official NestJs doc, there aren't many sources of information on Apache Kafka's integration with NestJs, which can be a downside to this topic if you're having some bugs that not knowing about it.

## Links

* https://aos.atlassian.net/browse/AOS-4976