# SSH

SSH - Secure Shell protocal

### Other protocals:
 - HTTP (Hyper text transfer protocal)
 - HTTPs(Hyper text transfer protocal Secured)
 - FTP(File transfer protocal)

### SSH:
 - used to communicate host and client with secured manner.

### connect to host with SSH:
syntax:

```
ssh {user}@{host}

```

### testing SSH:
Digigtal ocean -> droplets -> create server

explore digital ocean

```
example:
ssh root@167.99.146.57
```

### SSH client:
for windows: putty
for linux, mac: it works in terminal

### uses:

1. connecting to github.
2. connecting remote computers.
3. connect server with ssh.


### connecting through SSH:

```
ssh root@192.168.45.2

git clone with SSH (should have authenticated before hand, no need to provide credentials there after)
git clone with HTTPs (should give user name and password each time of commits, clone, pull, etc)
```

### To copy folder from client to host:

```
{foldername}> rsync -av . root@192.168.45.2:{foldername}
```

### Encrytions:

- symmetrical encryption
- asymmetrical encryption
- hashing

#### symmetical encryption:

```
    (client)                                       ->                                     (host)
    (encryption)"hello" + {key} => "E324xs-23"    <=>             (decryption)"E324xs-23" + {key} => "hello"
```
pros:\
without key middleman cant decrypt the message.

cons:\
if some one has the key, they can decrypt the message.
we have to do the key exchange.


#### asymmetical encryption:

to overcome symmetrical issue there is "key exchange algorithm":  

There will be two keys (public, private) for client and as well as the host.  

public key is shared to any public.  
private key will only in the client machine and should not be shared.  

with the public key, host will encrypt the data to the client where the encryted data is decrypted by client private key
and similarly vice versa with the host.

```
difiie hellman key exchange:
 key exchange used to create public and private key using diffie hellman key exhange algorithm.
```
#### resources:

https://www.youtube.com/watch?v=NmM9HA2MQGI

https://www.youtube.com/watch?v=Yjrfm_oRO0w

https://www.youtube.com/watch?v=vsXMMT2CqqE&t=

https://www.youtube.com/watch?v=NF1pwjL9-DE


### Hashing:

using hash function message are crypted.

```
    (client)                                       ->                                     (host)
    (encryption)"hello" + {key} => "E324xs-23"    <=>             (decryption)"E324xs-23" + {key} => "hello"
```

checksum between client and host:  
HMAC (hash message authentication codes):  

symmetrical way:
    client will encrypt the message with key, message and sends to host  

    if someone tampers the data in betweeen  

    host will re hash message and compares the encrypted between the two.  

### password or ssh:

 - ssh is better to connect github.

### RSA:

```
ssh-keygen -C "some comment"
```
will create two keys with id_rsa (private), id_rsa.pub (public)  

add public key to host .ssh folder or copy the key file and paste to it.  

below will add the ssh private key to ssh list  
```
eval `ssh-agent -s`
ssh-add {full filepath}
```
Now client and host are securly connect between them.  

public key should be shared to host.  

and private key should be added to client ssh list.  

# Resources: SSH Into A Server

## Recommended ssh-keygen  command:

```
# generates ssh key (git hub recommands below way)
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

# lists all the keys
ssh-add -l

# deletes all the keys
ssh-add -D

```

## Windows: 
If you have Git for Windows (which you should), ssh-keygen command should be available: https://gitforwindows.org/
You can read more about this here
Another option is to use https://www.ssh.com/ssh/putty/windows/puttygen

```
pbcopy  command: https://superuser.com/questions/472598/pbcopy-for-windows/1171448#1171448
```

## Extra Video:
If you want to learn a little bit more about how SSH works internally, watch this excellent video: https://youtu.be/ORcvSkgdA58

## Extra Solution: Set Up SSH on Github
Here is a great visual guide created by a fellow student if you are still having problems solving this exercise (especially on Windows): https://github.com/antonykidis/Setup-ssh-for-github/blob/master/Setup-ssh-on-github.pdf