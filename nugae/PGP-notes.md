---
title: "PGP notes"
description: "traditional post"
date: "2021-05-15"
public: false
---


# Notes on GPG

How to write an encrypted message / read an encrypted message

## Goals
3 goals of a crypto-system : authenticity, confidentiality, integrity 
4th goal is optional : non-repudiation

### Historical context
1976 : Whitfield DIFFIE and Martin HELLMAN give birth to ** public key cryptograhy **.

Before this invention, crypto-systems relied on a single key, 
- used both to write and read encrypted messages, 

- and shared by both the sender and the recipient. 

Precisely, sharing this secret key was a huge constraint. 
Now that we only share public keys, are we completely out of trouble ?

### What is a digital signature

Technically speaking, given a message to send, a signature is an **encrypted** hash :
- the hash is calculated on the message (or binary file) to be sent
- the hash is encrypted with the sender private-key

The signature has to be sent along with the message.

Hence, when receiving the me:ssage and the signature, verifying a signature implies to :
- re-calculate the hash of the received (uncrypted) message
- decypher the received signature with the public key of the sender
- compare both the hash and the decyphered signature

This clearly means that a digital signature : 
- depends on both the content of the message (hash) and its origin (this hash is encrypted with a private key)
- ensures to meet 2 of the 3 goals of a crypto-system : authenticity and integrity (not confidentiality)
- relies on the public key cryptography, and on its potential weaknesses...

### Why you want to verify the public keys of your recipients.

The main vulnerability of public key cryptography is the distribution of public keys: 
Let's pretend you receive a public key, which you assume to belong to your best friend. 
But let's also pretend the real owner of the public key is not the person he says he is, he is not your best friend.
You think a given public key belongs to A (your best friend) as in reality it belongs to B (your worst enemy).
No big word, this is simply identity usurpation.

In such a situation, you write and send encrypted messages to a "man in the middle", thinking he is A. He then forwards them to A (since A public key is well...public).
Even if he cannot read A's responses, B is spying at every response you make to A. 

That is why, when using somebody's public key, you just want to be sure of its authenticity and integrity.
So, you think, I'll ask them for a signature.
But, since you precisely need A's public key to verify any signature emitted by A, you cannot pretend to verify the signature of his public key ! 
To distribute a public key, you cannot use the signature as we described above.
OpenPGP (and by GnuPrivacyGuard) brings a solution, allowing anybody to sign and verify public keys.
And this is where key certificates come into play.

### PGP idea
First you'll have to understand what is an **PGP public key**, which is not the same as a basic public key.
To prevent equivocity, we'll use the right term for it : **PGP certificate**

## PGP certificate
On one side, you have the association of a public key and an identity (usually name and email)
On the other side, you have a signature, often called a certification.
The whole forms a PGP certificate.

Once you trust a public key, you will be able to trust all public keys signed with the trusted key.
### The public key servers (PKS)

## Links
https://www.gnupg.org/howtos/fr/GPGMiniHowto.html#toc6
https://linuxfr.org/users/gouttegd/journaux/de-la-distribution-des-clefs-openpgp


